import { authenticateUser } from "@src/lib/authenticate-user";
import { requireRole } from "@src/lib/permission";
import prisma from "@src/lib/prisma";
import { validateAssignment } from "@src/lib/scheduling/constraints";
import { SwapSchema } from "@src/lib/validation";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
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
      { success: false, errors: validation.errors },
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

  return NextResponse.json({ success: true, data: swap }, { status: 201 });
}
