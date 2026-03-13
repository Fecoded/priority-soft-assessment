import { NextResponse } from "next/server";

import { authenticateUser } from "@src/lib/authenticate-user";
import { ErrorHandler } from "@src/lib/error";
import { requireRole } from "@src/lib/permission";
import prisma from "@src/lib/prisma";
import { validateAssignment } from "@src/lib/scheduling/constraints";
import { SwapSchema } from "@src/lib/validation";

export async function GET(req: Request) {
  try {
    const user = await authenticateUser(req);

    requireRole(user, ["ADMIN", "MANAGER", "STAFF"]);

    const swaps = await prisma.swapRequest.findMany({
      where: {
        status: "PENDING",
        OR: [{ targetUserId: user.id }, { requesterId: user.id }],
      },
      include: {
        shift: {
          include: {
            location: true,
          },
        },
        requester: {
          select: {
            id: true,
            email: true,
            name: true,
            role: true,
            createdAt: true,
          },
        },
      },
    });
    return NextResponse.json({ success: true, data: swaps }, { status: 200 });
  } catch (err) {
    return ErrorHandler(err);
  }
}

export async function POST(req: Request) {
  try {
    const user = await authenticateUser(req);

    requireRole(user, ["STAFF"]);

    const payload = await req.json();

    //Validation
    const swapValidation = SwapSchema.safeParse(payload);

    if (!swapValidation.success) {
      return NextResponse.json(
        { success: false, message: swapValidation.error.issues[0].message },
        { status: 400 },
      );
    }

    const { targetUserId, shiftId } = swapValidation.data;

    const validation = await validateAssignment(targetUserId, shiftId);

    if (!validation.valid) {
      return NextResponse.json(
        { success: false, message: validation.errors },
        { status: 400 },
      );
    }

    const existing = await prisma.swapRequest.findFirst({
      where: { shiftId, targetUserId },
    });

    if (existing) {
      return NextResponse.json(
        { success: false, message: "Swap request already exist" },
        { status: 400 },
      );
    }

    const expiresAt = new Date();
    expiresAt.setHours(expiresAt.getHours() + 24);

    const swap = await prisma.swapRequest.create({
      data: {
        shiftId: shiftId,
        requesterId: user.id,
        targetUserId: targetUserId,
        expiresAt,
      },
    });

    return NextResponse.json(
      { success: true, data: swap, message: "Swap request Successful" },
      { status: 201 },
    );
  } catch (err) {
    return ErrorHandler(err);
  }
}
