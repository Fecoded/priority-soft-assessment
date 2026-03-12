import { NextResponse } from "next/server";

import { authenticateUser } from "@src/lib/authenticate-user";
import { requireRole } from "@src/lib/permission";
import prisma from "@src/lib/prisma";

export async function GET(req: Request) {
  try {
    const user = await authenticateUser(req);

    requireRole(user, ["ADMIN", "MANAGER", "STAFF"]);

    const shifts = await prisma.shiftAssignment.findMany({
      where: {
        userId: user.id,
      },
      include: {
        shift: {
          include: {
            location: true,
            requiredSkill: true,
          },
        },
      },
    });

    return NextResponse.json({ success: true, data: shifts }, { status: 200 });
  } catch (err) {
    return NextResponse.json(
      { success: false, message: `Internal server error, ${err}` },
      { status: 500 },
    );
  }
}
