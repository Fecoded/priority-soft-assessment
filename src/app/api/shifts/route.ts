import { NextResponse } from "next/server";

import { authenticateUser } from "@src/lib/authenticate-user";
import { requireRole } from "@src/lib/permission";
import { ShiftSchema } from "@src/lib/validation";
import prisma from "@src/lib/prisma";
import { ErrorHandler } from "@src/lib/error";

export async function GET(req: Request) {
  try {
    const user = await authenticateUser(req);

    requireRole(user, ["ADMIN", "MANAGER", "STAFF"]);

    const shifts = await prisma.shift.findMany({
      include: {
        location: true,
        requiredSkill: true,
        assignments: {
          include: {
            user: true,
          },
        },
      },
    });

    return NextResponse.json({ success: true, data: shifts }, { status: 200 });
  } catch (err) {
    return ErrorHandler(err);
  }
}

export async function POST(req: Request) {
  try {
    const user = await authenticateUser(req);

    requireRole(user, ["ADMIN", "MANAGER"]);

    const payload = await req.json();

    // Validation
    const validation = ShiftSchema.safeParse(payload);

    if (!validation.success) {
      return NextResponse.json(
        { success: false, message: validation.error.issues[0].message },
        { status: 400 },
      );
    }

    const { skillId, locationId, startTime, endTime, headCount } =
      validation.data;

    const newShift = await prisma.shift.create({
      data: {
        skillId,
        locationId,
        startDate: startTime,
        endDate: endTime,
        headCount,
      },
    });

    return NextResponse.json(
      { success: true, message: "Shift created successfully", data: newShift },
      { status: 201 },
    );
  } catch (err) {
    return ErrorHandler(err);
  }
}
