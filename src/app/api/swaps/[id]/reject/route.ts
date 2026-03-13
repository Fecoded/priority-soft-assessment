import { NextResponse } from "next/server";

import { authenticateUser } from "@src/lib/authenticate-user";
import { requireRole } from "@src/lib/permission";
import prisma from "@src/lib/prisma";

type RouteContext = {
  params: Promise<{ id: string }>;
};

export async function DELETE(req: Request, cxt: RouteContext) {
  try {
    const user = await authenticateUser(req);

    requireRole(user, ["STAFF"]);

    const { params } = cxt;
    const { id } = await params;

    const swap = await prisma.swapRequest.findUnique({
      where: { id },
    });

    if (!swap) {
      return NextResponse.json(
        { success: false, message: "Swap not found" },
        { status: 404 },
      );
    }

    if (swap.requesterId !== user.id) {
      return NextResponse.json(
        { success: false, message: "You are not authorised" },
        { status: 403 },
      );
    }

    if (swap.status !== "PENDING") {
      return NextResponse.json(
        { success: false, message: "Swap already processed" },
        { status: 400 },
      );
    }

    await prisma.swapRequest.update({
      where: { id: swap.id },
      data: { status: "REJECTED" },
    });

    return NextResponse.json(
      { success: true, message: "Swap was rejected" },
      { status: 200 },
    );
  } catch (err) {
    return NextResponse.json(
      { success: false, message: `Internal server error, ${err}` },
      { status: 500 },
    );
  }
}
