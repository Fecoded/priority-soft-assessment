import { NextResponse } from "next/server";

import { authenticateUser } from "@src/lib/authenticate-user";
import { requireRole } from "@src/lib/permission";
import { LocationSchema } from "@src/lib/validation";
import prisma from "@src/lib/prisma";

export async function GET(request: Request) {
  try {
    const user = await authenticateUser(request);

    requireRole(user, ["ADMIN", "MANAGER", "STAFF"]);

    const location = await prisma.location.findMany();

    return NextResponse.json(
      { success: true, message: "Location list", data: location },
      { status: 200 },
    );
  } catch (err) {
    return NextResponse.json(
      { success: false, message: `Internal server error, ${err}` },
      { status: 500 },
    );
  }
}

export async function POST(req: Request) {
  try {
    const user = await authenticateUser(req);

    requireRole(user, ["ADMIN"]);

    const payload = await req.json();

    // validation
    const validation = LocationSchema.safeParse(payload);

    if (!validation.success) {
      return NextResponse.json(
        { success: false, message: validation.error.issues[0].message },
        { status: 400 },
      );
    }

    const { name, timezone } = validation.data;

    const existingLocation = await prisma.location.findFirst({
      where: { timezone },
    });

    if (existingLocation) {
      return NextResponse.json(
        { success: false, message: "Location already exist" },
        { status: 400 },
      );
    }

    const location = await prisma.location.create({
      data: { name, timezone },
    });

    return NextResponse.json(
      {
        success: true,
        message: "Location created successfully",
        data: location,
      },
      { status: 201 },
    );
  } catch (err) {
    return NextResponse.json(
      { success: false, message: `Internal server error, ${err}` },
      { status: 500 },
    );
  }
}
