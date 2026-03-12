import { NextResponse } from "next/server";
import { omit } from "lodash";

import { authenticateUser } from "@src/lib/authenticate-user";
import prisma from "@src/lib/prisma";
import { requireRole } from "@src/lib/permission";

type RouteContext = {
  params: Promise<{ id: string }>;
};

export async function GET(request: Request, cxt: RouteContext) {
  try {
    const user = await authenticateUser(request);

    requireRole(user, ["ADMIN", "MANAGER"]);

    const { params } = cxt;
    const { id } = await params;

    const staff = await prisma.user.findUnique({ where: { id } });

    return NextResponse.json(
      { success: true, data: omit(staff, ["password"]) },
      { status: 200 },
    );
  } catch (err) {
    return NextResponse.json(
      { success: false, message: `Internal server error, ${err}` },
      { status: 500 },
    );
  }
}
