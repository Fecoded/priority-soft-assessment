import { Role, User } from "@prisma/client";
import { NextResponse } from "next/server";
import prisma from "./prisma";

export function requireRole(user: User, roles: Role[]) {
  if (!roles.includes(user.role)) {
    return NextResponse.json(
      { success: false, message: "Unauthorized access" },
      { status: 403 },
    );
  }
}

export async function requireManagerOfLocation(user: User, locationId: string) {
  if (user.role === "MANAGER") {
    const managesLocation = await prisma.location.findFirst({
      where: {
        id: locationId,
        managers: {
          some: { id: user.id },
        },
      },
    });

    if (!managesLocation) {
      return NextResponse.json(
        { success: false, message: "You cannot manage this location" },
        { status: 400 },
      );
    }
  }
}
