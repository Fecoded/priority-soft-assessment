import { NextResponse } from "next/server";
import * as bcrypt from "bcryptjs";
import { omit } from "lodash";

import { authenticateUser } from "@src/lib/authenticate-user";
import { requireRole } from "@src/lib/permission";
import prisma from "@src/lib/prisma";
import { UserSchema } from "@src/lib/validation";

export async function GET(request: Request) {
  try {
    const user = await authenticateUser(request);

    requireRole(user, ["ADMIN", "MANAGER"]);

    const staff = await prisma.user.findMany({ where: { role: "STAFF" } });

    return NextResponse.json(
      { success: true, message: "Staff list", data: omit(staff, ["password"]) },
      { status: 200 },
    );
  } catch (err) {
    return NextResponse.json(
      { success: false, message: `Internal server error, ${err}` },
      { status: 500 },
    );
  }
}

export async function POST(request: Request) {
  try {
    const payload = await request.json();

    // validation
    const validation = UserSchema.safeParse(payload);

    if (!validation.success) {
      return NextResponse.json(
        { success: false, message: validation.error.issues[0].message },
        { status: 400 },
      );
    }

    const { name, email, password } = validation.data;

    const existingUser = await prisma.user.findUnique({
      where: { email: email.trim().toLowerCase() },
    });

    if (existingUser) {
      return NextResponse.json(
        { success: false, message: "Email already exists" },
        { status: 400 },
      );
    }

    const user = {
      name: name.trim(),
      email: email.trim().toLowerCase(),
      password: await bcrypt.hash(password, 10),
      ...(payload.role && { role: payload.role }),
    };

    const createdUser = await prisma.user.create({ data: user });

    return NextResponse.json(
      { success: true, data: omit(createdUser, ["password"]) },
      { status: 201 },
    );
  } catch (err) {
    return NextResponse.json(
      { success: false, message: `Internal server error, ${err}` },
      { status: 500 },
    );
  }
}
