import { Shift } from "@prisma/client";

import prisma from "@src/lib/prisma";
import { CONSTANTS } from "../constants";

export async function checkSkillMatch(userId: string, shift: Shift) {
  const hasSkill = await prisma.staffSkill.findFirst({
    where: {
      userId,
      skillId: shift.skillId,
    },
  });

  if (!hasSkill) {
    return {
      code: CONSTANTS.SKILL_MISMATCH,
      message: "User does not have required skill for this shift",
    };
  }

  return null;
}

export async function checkCertification(userId: string, shift: Shift) {
  const certified = await prisma.certification.findFirst({
    where: {
      userId,
      locationId: shift.locationId,
    },
  });

  if (!certified) {
    return {
      code: CONSTANTS.NOT_CERTIFIED,
      message: "User is not certified for this location",
    };
  }

  return null;
}

export async function checkDoubleBooking(userId: string, shift: Shift) {
  const overlappingShift = await prisma.shiftAssignment.findFirst({
    where: {
      userId,
      shift: {
        AND: [
          { startDate: { lt: shift.endDate } },
          { endDate: { gt: shift.startDate } },
        ],
      },
    },
    include: { shift: true },
  });

  if (overlappingShift) {
    return {
      code: CONSTANTS.DOUBLE_BOOKING,
      message: "User is already scheduled for another shift during this time",
    };
  }

  return null;
}

export async function checkRestPeriod(userId: string, shift: Shift) {
  const assignments = await prisma.shiftAssignment.findMany({
    where: { userId },
    include: { shift: true },
  });

  for (const assignedShift of assignments) {
    const hoursBetween =
      Math.abs(
        new Date(shift.startDate).getTime() -
          new Date(assignedShift.shift.endDate).getTime(),
      ) /
      (1000 * 60 * 60);

    if (hoursBetween < 10) {
      return {
        code: CONSTANTS.MIN_REST_VIOLATION,
        message: "Minimum 10 hours rest required between shifts",
      };
    }
  }

  return null;
}

export async function checkHeadCount(shiftId: string) {
  const shift = await prisma.shift.findUnique({
    where: { id: shiftId },
    include: { assignments: true },
  });

  if (!shift) return null;

  if (shift.assignments.length >= shift.headCount) {
    return {
      code: CONSTANTS.HEADCOUNT_REACHED,
      message: "Shift already filled",
    };
  }

  return null;
}

export async function checkDailyLimit(userId: string, shift: Shift) {
  const sameDayAssignments = await prisma.shiftAssignment.findMany({
    where: {
      userId,
      shift: {
        startDate: {
          gte: new Date(new Date(shift.startDate).setHours(0, 0, 0, 0)),
          lt: new Date(new Date(shift.startDate).setHours(24, 0, 0, 0)),
        },
      },
    },
    include: { shift: true },
  });

  let totalHours = sameDayAssignments.reduce((sum, assignment) => {
    const diff =
      (assignment.shift.endDate.getTime() -
        assignment.shift.startDate.getTime()) /
      (1000 * 60 * 60);

    return sum + diff;
  }, 0);

  const newShiftHours =
    (shift.endDate.getTime() - shift.startDate.getTime()) / (1000 * 60 * 60);

  totalHours += newShiftHours;

  if (totalHours > 12) {
    return {
      code: CONSTANTS.DAILY_LIMIT_EXCEEDED,
      message: "Daily hours exceed 12-hour maximum",
    };
  }

  if (totalHours > 8) {
    return {
      code: CONSTANTS.DAILY_OVERTIME_WARNING,
      message: "Daily hours exceed 8-hour warning threshold",
    };
  }

  return null;
}

export async function checkWeeklyLimit(userId: string, shift: Shift) {
  const startOfWeek = new Date(shift.startDate);

  startOfWeek.setDate(startOfWeek.getDate() - startOfWeek.getDay());
  startOfWeek.setHours(0, 0, 0, 0);

  const endOfWeek = new Date(startOfWeek);
  endOfWeek.setDate(endOfWeek.getDate() + 7);

  const weeklyAssignments = await prisma.shiftAssignment.findMany({
    where: {
      userId,
      shift: {
        startDate: {
          gte: startOfWeek,
          lt: endOfWeek,
        },
      },
    },
    include: { shift: true },
  });

  let totalHours = weeklyAssignments.reduce((sum, a) => {
    const diff =
      (a.shift.endDate.getTime() - a.shift.startDate.getTime()) /
      (1000 * 60 * 60);

    return sum + diff;
  }, 0);

  const newShiftHours =
    (shift.endDate.getTime() - shift.startDate.getTime()) / (1000 * 60 * 60);

  totalHours += newShiftHours;

  if (totalHours > 40) {
    return {
      code: CONSTANTS.WEEKLY_OVERTIME_WARNING,
      message: "User exceeds 40-hours weekly threshold",
    };
  }

  return null;
}

export async function validateAssignment(userId: string, shiftId: string) {
  const shift = await prisma.shift.findUnique({
    where: { id: shiftId },
  });

  if (!shift) {
    throw new Error("Shift not found");
  }

  const errors = [];
  const warnings = [];

  const checks = [
    checkSkillMatch,
    checkCertification,
    checkDoubleBooking,
    checkRestPeriod,
    checkHeadCount,
  ];

  for (const check of checks) {
    const result = await check(userId, shift);
    if (result) errors.push(result);
  }

  const daily = await checkDailyLimit(userId, shift);

  if (daily) {
    if (daily.code.includes("WARNING")) warnings.push(daily);
    else errors.push(daily);
  }

  const weekly = await checkWeeklyLimit(userId, shift);
  if (weekly) warnings.push(weekly);

  return {
    valid: errors.length === 0,
    errors,
    warnings,
  };
}

async function findAlternativeStaff(shift: Shift) {
  const candidates = await prisma.user.findMany({
    where: {
      skills: {
        some: {
          skillId: shift.skillId,
        },
      },
      certifications: {
        some: {
          locationId: shift.locationId,
        },
      },
      role: "STAFF",
    },
  });

  return candidates;
}

export async function suggestAlternatives(shift: Shift) {
  const candidates = await findAlternativeStaff(shift);

  const validCandidates = [];

  for (const user of candidates) {
    const validation = await validateAssignment(user.id, shift.id);

    if (validation.valid) {
      validCandidates.push({
        id: user.id,
        name: user.name,
      });
    }
  }

  return validCandidates.slice(0, 3);
}
