import { NextResponse } from "next/server";

import { authenticateUser } from "@src/lib/authenticate-user";
import { requireRole } from "@src/lib/permission";
import { SkillSchema } from "@src/lib/validation";
import prisma from "@src/lib/prisma";

export async function GET(request: Request) {
  try {
    const user = await authenticateUser(request);

    requireRole(user, ["ADMIN", "MANAGER", "STAFF"]);

    const skills = await prisma.skill.findMany();

    return NextResponse.json(
      { success: true, message: "Skill list", data: skills },
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
    const validation = SkillSchema.safeParse(payload);

    if (!validation.success) {
      return NextResponse.json(
        { success: false, message: validation.error.issues[0].message },
        { status: 400 },
      );
    }

    const { name } = validation.data;

    const existingSkill = await prisma.skill.findFirst({
      where: { name },
    });

    if (existingSkill) {
      return NextResponse.json(
        { success: false, message: "Skill already exist" },
        { status: 400 },
      );
    }

    const skill = await prisma.skill.create({
      data: { name },
    });

    return NextResponse.json(
      {
        success: true,
        message: "Skill created successfully",
        data: skill,
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
