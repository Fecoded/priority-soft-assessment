import { authenticateUser } from "@src/lib/authenticate-user";
import { ErrorHandler } from "@src/lib/error";
import { requireRole } from "@src/lib/permission";
import prisma from "@src/lib/prisma";
import { validateAssignment } from "@src/lib/scheduling/constraints";
import { NextResponse } from "next/server";

type RouteContext = {
  params: Promise<{ id: string }>;
};

export async function POST(req: Request, cxt: RouteContext) {
  try {
    const user = await authenticateUser(req);

    requireRole(user, ["STAFF"]);

    const { params } = cxt;
    const { id } = await params;

    const swap = await prisma.swapRequest.findUnique({
      where: { id },
      include: { shift: true },
    });

    if (!swap) {
      return NextResponse.json(
        { success: false, message: "Swap Request not found" },
        { status: 404 },
      );
    }

    if (swap.status !== "PENDING") {
      return NextResponse.json(
        { success: false, message: "Swap Request already processed" },
        { status: 400 },
      );
    }

    if (new Date() > swap.expiresAt) {
      return NextResponse.json(
        { success: false, message: "Swap Request already started" },
        { status: 400 },
      );
    }

    const validation = await validateAssignment(
      swap.targetUserId!,
      swap.shiftId,
    );

    if (!validation.valid) {
      return NextResponse.json(
        { success: false, errors: validation.errors },
        { status: 400 },
      );
    }

    await prisma.$transaction([
      prisma.shiftAssignment.deleteMany({
        where: {
          shiftId: swap.shiftId,
          userId: swap.requesterId,
        },
      }),

      prisma.shiftAssignment.create({
        data: {
          shiftId: swap.shiftId,
          userId: swap.targetUserId!,
        },
      }),

      prisma.swapRequest.update({
        where: { id: swap.id },
        data: { status: "ACCEPTED" },
      }),
    ]);

    return NextResponse.json(
      { success: true, message: "Swap request successful" },
      { status: 200 },
    );
  } catch (err) {
    return ErrorHandler(err);
  }
}
