import { NextResponse } from "next/server";

import { authenticateUser } from "@src/lib/authenticate-user";
import { requireRole } from "@src/lib/permission";
import {
  suggestAlternatives,
  validateAssignment,
} from "@src/lib/scheduling/constraints";
import prisma from "@src/lib/prisma";

type RouteContext = {
  params: Promise<{ id: string }>;
};

export async function POST(req: Request, cxt: RouteContext) {
  const user = await authenticateUser(req);

  requireRole(user, ["ADMIN", "MANAGER"]);

  const { params } = cxt;
  const { id } = await params;

  const validation = await validateAssignment(user.id, id);

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
      userId: user.id,
      shiftId: id,
    },
  });

  return NextResponse.json(
    {
      success: true,
      data: assignment,
      warnings: validation.warnings,
    },
    { status: 201 },
  );
}
