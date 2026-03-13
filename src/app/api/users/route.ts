import { NextResponse } from "next/server";
import * as bcrypt from "bcryptjs";
import { omit } from "lodash";

import { authenticateUser } from "@src/lib/authenticate-user";
import { requireRole } from "@src/lib/permission";
import prisma from "@src/lib/prisma";
import { UserSchema } from "@src/lib/validation";
import { Role } from "@prisma/client";

export async function GET(request: Request) {
  try {
    const user = await authenticateUser(request);

    requireRole(user, ["ADMIN", "MANAGER", "STAFF"]);

    const rolesToFetch =
      user.role === Role.ADMIN ? [Role.STAFF, Role.MANAGER] : [Role.STAFF];

    const staff = await prisma.user.findMany({
      where: { role: { in: rolesToFetch } },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        skills: {
          select: {
            skill: true,
          },
        },
        availability: true,
        certifications: {
          select: {
            location: true,
          },
        },
        managedLocations: true,
        createdAt: true,
      },
    });

    const formattedStaff = staff.map((user) => ({
      ...user,
      skills: user.skills.map((s) => s.skill),
      certifications: user.certifications.map((c) => c.location),
    }));

    return NextResponse.json(
      { success: true, message: "Staff list", data: formattedStaff },
      { status: 200 },
    );
  } catch (err) {
    const error = err as { message: string };
    if (error.message === "Unauthorized access") {
      return NextResponse.json(
        { success: false, message: error.message },
        { status: 403 },
      );
    } else {
      return NextResponse.json(
        { success: false, message: `Internal server error, ${err}` },
        { status: 500 },
      );
    }
  }
}

export async function POST(request: Request) {
  try {
    const user = await authenticateUser(request);

    requireRole(user, ["ADMIN"]);

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

    const newUser = {
      name: name.trim(),
      email: email.trim().toLowerCase(),
      password: await bcrypt.hash(password, 10),
      ...(payload.role && { role: payload.role }),
    };

    const createdUser = await prisma.user.create({ data: newUser });

    return NextResponse.json(
      { success: true, data: omit(createdUser, ["password"]) },
      { status: 201 },
    );
  } catch (err) {
    const error = err as { message: string };
    if (error.message === "Unauthorized access") {
      return NextResponse.json(
        { success: false, message: error.message },
        { status: 403 },
      );
    } else {
      return NextResponse.json(
        { success: false, message: `Internal server error, ${err}` },
        { status: 500 },
      );
    }
  }
}
