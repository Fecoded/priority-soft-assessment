import { NextResponse } from "next/server";

import { AssignSkillSchema } from "@src/lib/validation";
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

    const skills = await prisma.staffSkill.findMany({
      where: { userId: id },
      include: {
        skill: true,
      },
    });

    return NextResponse.json({ success: true, data: skills }, { status: 201 });
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

    const { params } = cxt;
    const { id } = await params;

    const payload = await request.json();

    //Validation
    const validation = AssignSkillSchema.safeParse(payload);

    if (!validation.success) {
      return NextResponse.json(
        { success: false, message: validation.error.issues[0].message },
        { status: 400 },
      );
    }

    const { skillId } = validation.data;

    const existing = await prisma.staffSkill.findFirst({
      where: { userId: id, skillId },
    });

    if (existing) {
      return NextResponse.json(
        { success: false, message: "Skill already assigned" },
        { status: 400 },
      );
    }

    await prisma.staffSkill.create({
      data: {
        userId: id,
        skillId,
      },
    });

    return NextResponse.json(
      { success: true, message: "Skill assigned successfully" },
      { status: 201 },
    );
  } catch (err) {
    return NextResponse.json(
      { success: false, message: `Internal server error, ${err}` },
      { status: 500 },
    );
  }
}
