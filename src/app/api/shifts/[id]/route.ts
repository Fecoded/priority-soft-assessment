import { NextResponse } from "next/server";

import { authenticateUser } from "@src/lib/authenticate-user";
import { requireRole } from "@src/lib/permission";
import {
  suggestAlternatives,
  validateAssignment,
} from "@src/lib/scheduling/constraints";
import prisma from "@src/lib/prisma";
import { ErrorHandler } from "@src/lib/error";
import { AssignShiftSchema } from "@src/lib/validation";

type RouteContext = {
  params: Promise<{ id: string }>;
};

export async function POST(req: Request, cxt: RouteContext) {
  try {
    const user = await authenticateUser(req);

    requireRole(user, ["ADMIN", "MANAGER"]);

    const payload = await req.json();

    // validation
    const shiftValidation = AssignShiftSchema.safeParse(payload);

    if (!shiftValidation.success) {
      return NextResponse.json(
        {
          success: false,
          message: shiftValidation.error.issues[0].message,
        },
        { status: 400 },
      );
    }

    const { userId } = shiftValidation.data;

    const { params } = cxt;
    const { id } = await params;

    const validation = await validateAssignment(userId, id);

    if (!validation.valid) {
      const shift = await prisma.shift.findUnique({
        where: { id },
      });

      const suggestions = shift ? await suggestAlternatives(shift) : [];

      return NextResponse.json(
        {
          success: false,
          errors: validation.errors,
          warnings: validation.warnings,
          suggestions,
        },
        { status: 400 },
      );
    }

    const assignment = await prisma.shiftAssignment.create({
      data: {
        userId,
        shiftId: id,
      },
    });

    return NextResponse.json(
      {
        success: true,
        data: assignment,
        warnings: validation.warnings,
        message: "Shift Assigned",
      },
      { status: 201 },
    );
  } catch (err) {
    return ErrorHandler(err);
  }
}
