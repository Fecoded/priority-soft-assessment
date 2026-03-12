import { z } from "zod";

export const UserSchema = z.object({
  name: z
    .string({
      error: (issue) =>
        issue.input === undefined ? { message: "Name is required" } : undefined,
    })
    .min(2, { message: "Name must be at least 2 characters" }),
  email: z.email({ message: "Invalid email address" }),
  password: z
    .string({
      error: (issue) =>
        issue.input === undefined
          ? { message: "Password is required" }
          : undefined,
    })
    .min(6, { message: "Password must be at least 6 characters" }),
  role: z.enum(["MANAGER", "ADMIN", "STAFF"]).default("STAFF"),
});

export const LoginSchema = z.object({
  email: z.email({ message: "Invalid email address" }),
  password: z.string({
    error: (issue) =>
      issue.input === undefined
        ? { message: "Password is required" }
        : undefined,
  }),
});

export const AssignSkillSchema = z.object({
  skillId: z.string({
    error: (issue) =>
      issue.input === undefined
        ? { message: "skillId is required" }
        : undefined,
  }),
});

export const CertifyStaffSchema = z.object({
  locationId: z.string({
    error: (issue) =>
      issue.input === undefined
        ? { message: "locationId is required" }
        : undefined,
  }),
});

export const LocationSchema = z.object({
  name: z.string({
    error: (issue) =>
      issue.input === undefined ? { message: "name is required" } : undefined,
  }),
  timezone: z.string({
    error: (issue) =>
      issue.input === undefined
        ? { message: "timezone is required" }
        : undefined,
  }),
});

export const SkillSchema = z.object({
  name: z.string({
    error: (issue) =>
      issue.input === undefined ? { message: "name is required" } : undefined,
  }),
});

export const ShiftSchema = z
  .object({
    locationId: z.string({
      error: (issue) =>
        issue.input === undefined
          ? { message: "locationId is required" }
          : undefined,
    }),
    skillId: z.string({
      error: (issue) =>
        issue.input === undefined
          ? { message: "skillId is required" }
          : undefined,
    }),
    startTime: z.iso.datetime({
      error: (issue) =>
        issue.input === undefined
          ? {
              message: "Invalid time format, expected 2020-01-01T06:15:00Z",
            }
          : undefined,
    }),
    endTime: z.iso.datetime({
      error: (issue) =>
        issue.input === undefined
          ? {
              message: "Invalid time format, expected 2020-01-01T06:15:00Z",
            }
          : undefined,
    }),
    headCount: z.number({
      error: (issue) =>
        issue.input === undefined
          ? { message: "Head Count is required" }
          : undefined,
    }),
  })
  .refine((data) => data.startTime < data.endTime, {
    message: "Start time must be earlier the end time",
    path: ["startTime"],
  });

export const SwapSchema = z.object({
  shiftId: z.string({
    error: (issue) =>
      issue.input === undefined
        ? { message: "ShiftId is required" }
        : undefined,
  }),
  targetUserId: z.string({
    error: (issue) =>
      issue.input === undefined
        ? { message: "TargetUserId is required" }
        : undefined,
  }),
});
