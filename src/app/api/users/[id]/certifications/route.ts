import { NextResponse } from "next/server";

import { CertifyStaffSchema } from "@src/lib/validation";
import { authenticateUser } from "@src/lib/authenticate-user";
import { requireRole } from "@src/lib/permission";
import prisma from "@src/lib/prisma";

type RouteContext = {
  params: Promise<{ id: string }>;
};

export async function GET(request: Request, cxt: RouteContext) {
  try {
    const user = await authenticateUser(request);

    requireRole(user, ["ADMIN", "MANAGER", "STAFF"]);

    const { params } = cxt;
    const { id } = await params;

    const locations = await prisma.certification.findMany({
      where: { userId: id },
      include: {
        location: true,
      },
    });

    return NextResponse.json(
      { success: true, data: locations },
      { status: 201 },
    );
  } catch (err) {
    return NextResponse.json(
      { success: false, message: `Internal server error, ${err}` },
      { status: 500 },
    );
  }
}

export async function POST(request: Request, cxt: RouteContext) {
  try {
    const user = await authenticateUser(request);

    requireRole(user, ["ADMIN", "MANAGER"]);

    const payload = await request.json();

    const { params } = cxt;
    const { id } = await params;

    //Validation
    const validation = CertifyStaffSchema.safeParse(payload);

    if (!validation.success) {
      return NextResponse.json(
        { success: false, message: validation.error.issues[0].message },
        { status: 400 },
      );
    }

    const { locationId } = validation.data;

    await prisma.certification.create({
      data: {
        userId: id,
        locationId,
      },
    });

    return NextResponse.json(
      { success: true, message: "Staff certified successfully" },
      { status: 201 },
    );
  } catch (err) {
    return NextResponse.json(
      { success: false, message: `Internal server error, ${err}` },
      { status: 500 },
    );
  }
}
