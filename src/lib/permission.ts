import { Role, User } from "@prisma/client";
import prisma from "./prisma";

export function requireRole(user: User, roles: Role[]) {
  if (!roles.includes(user.role)) {
    throw new Error("Unauthorized access");
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
      throw new Error("You cannot manage this location");
    }
  }
}
