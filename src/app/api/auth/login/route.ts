import { NextResponse } from "next/server";
import * as bcrypt from "bcryptjs";
import * as jwt from "jsonwebtoken";

import { LoginSchema } from "@src/lib/validation";
import prisma from "@src/lib/prisma";

export async function POST(request: Request) {
  try {
    const payload = await request.json();

    // validation
    const validation = LoginSchema.safeParse(payload);
    if (!validation.success) {
      return NextResponse.json(
        { success: false, message: validation.error.issues[0].message },
        { status: 400 },
      );
    }

    const { email, password } = validation.data;

    // check if user exists
    const existingUser = await prisma.user.findUnique({
      where: { email: email.trim().toLowerCase() },
    });

    if (!existingUser) {
      return NextResponse.json(
        { success: false, message: "Invalid Credentials" },
        { status: 400 },
      );
    }

    const pinIsValid = await bcrypt.compare(password, existingUser.password);

    if (!pinIsValid) {
      return NextResponse.json(
        { success: false, message: "Invalid Credentials" },
        { status: 400 },
      );
    }

    const tokenPayload = {
      userId: existingUser.id,
    };

    // One hour access token
    const accessToken = jwt.sign({ ...tokenPayload }, "secret", {
      expiresIn: 60 * 60,
    });

    const response = NextResponse.json(
      { success: true, message: "login successful" },
      { status: 200 },
    );

    response.cookies.set("USER_TOKEN", accessToken);

    return response;
  } catch (err) {
    return NextResponse.json(
      { success: false, message: `Internal server error, ${err}` },
      { status: 500 },
    );
  }
}
