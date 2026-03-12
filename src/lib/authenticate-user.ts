import * as jwt from "jsonwebtoken";

import prisma from "@src/lib/prisma";

export const authenticateUser = async (request: Request) => {
  let jwtToken = request.headers.get("authorization");

  if (!jwtToken) {
    throw new Error("Unauthorized");
  }

  if (jwtToken.substring(0, 6).toLocaleLowerCase() === "bearer") {
    jwtToken = jwtToken.substring(7).trim();
  }

  const extractedPayload = jwt.verify(jwtToken, "secret") as {
    userId: string;
  };

  const user = await prisma.user.findUnique({
    where: { id: extractedPayload.userId },
    select: {
      id: true,
      name: true,
      email: true,
      password: true,
      role: true,
      skills: true,
      availability: true,
      desiredHours: true,
      createdAt: true,
      updatedAt: true,
    },
  });

  if (!user) {
    throw new Error("User not found");
  }

  return user;
};
