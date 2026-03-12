import bcrypt from "bcryptjs";
import { PrismaClient, Role } from "@prisma/client";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";

const adapter = new PrismaBetterSqlite3({ url: process.env.DATABASE_URL });

const prisma = new PrismaClient({
  adapter,
  log:
    process.env.NODE_ENV === "development"
      ? ["query", "info", "warn", "error"]
      : ["error"],
});

async function main() {
  console.log("🌱 Seeding database...");

  const password = await bcrypt.hash("password123", 10);

  // LOCATIONS
  const [nyLocation, laLocation, chicagoLocation, miamiLocation] =
    await Promise.all([
      prisma.location.create({
        data: {
          name: "Coastal Eats - New York",
          timezone: "America/New_York",
        },
      }),
      prisma.location.create({
        data: {
          name: "Coastal Eats - Los Angeles",
          timezone: "America/Los_Angeles",
        },
      }),
      prisma.location.create({
        data: {
          name: "Coastal Eats - Chicago",
          timezone: "America/Chicago",
        },
      }),
      prisma.location.create({
        data: {
          name: "Coastal Eats - Miami",
          timezone: "America/New_York",
        },
      }),
    ]);

  // SKILLS
  const [bartender, server, cook, host] = await Promise.all([
    prisma.skill.create({ data: { name: "Bartender" } }),
    prisma.skill.create({ data: { name: "Server" } }),
    prisma.skill.create({ data: { name: "Line Cook" } }),
    prisma.skill.create({ data: { name: "Host" } }),
  ]);

  // USERS
  await prisma.user.create({
    data: {
      name: "Admin User",
      email: "admin@test.com",
      role: Role.ADMIN,
      password,
    },
  });

  const managerNY = await prisma.user.create({
    data: {
      name: "NY Manager",
      email: "manager.ny@test.com",
      role: Role.MANAGER,
      password,
    },
  });

  const managerLA = await prisma.user.create({
    data: {
      name: "LA Manager",
      email: "manager.la@test.com",
      role: Role.MANAGER,
      password,
    },
  });

  // STAFF
  const staff = await Promise.all([
    prisma.user.create({
      data: {
        name: "John Bartender",
        email: "john@test.com",
        role: Role.STAFF,
        password,
      },
    }),
    prisma.user.create({
      data: {
        name: "Maria Server",
        email: "maria@test.com",
        role: Role.STAFF,
        password,
      },
    }),
    prisma.user.create({
      data: {
        name: "David Cook",
        email: "david@test.com",
        role: Role.STAFF,
        password,
      },
    }),
    prisma.user.create({
      data: {
        name: "Sarah Host",
        email: "sarah@test.com",
        role: Role.STAFF,
        password,
      },
    }),
  ]);

  // LOCATION MANAGERS
  await prisma.location.update({
    where: { id: nyLocation.id },
    data: {
      managers: {
        connect: { id: managerNY.id },
      },
    },
  });

  await prisma.location.update({
    where: { id: laLocation.id },
    data: {
      managers: {
        connect: { id: managerLA.id },
      },
    },
  });

  // SKILLS FOR STAFF
  await prisma.staffSkill.createMany({
    data: [
      { userId: staff[0].id, skillId: bartender.id },
      { userId: staff[1].id, skillId: server.id },
      { userId: staff[2].id, skillId: cook.id },
      { userId: staff[3].id, skillId: host.id },
    ],
  });

  // CERTIFICATIONS
  await prisma.certification.createMany({
    data: [
      { userId: staff[0].id, locationId: nyLocation.id },
      { userId: staff[1].id, locationId: nyLocation.id },
      { userId: staff[2].id, locationId: laLocation.id },
      { userId: staff[3].id, locationId: chicagoLocation.id },
    ],
  });

  // SHIFTS
  const shift1 = await prisma.shift.create({
    data: {
      locationId: nyLocation.id,
      skillId: bartender.id,
      startDate: new Date("2026-06-10T18:00:00Z"),
      endDate: new Date("2026-06-10T23:00:00Z"),
      headCount: 1,
      status: "DRAFT",
    },
  });

  await prisma.shift.create({
    data: {
      locationId: nyLocation.id,
      skillId: server.id,
      startDate: new Date("2026-06-11T17:00:00Z"),
      endDate: new Date("2026-06-11T22:00:00Z"),
      headCount: 2,
      status: "DRAFT",
    },
  });

  // EXISTING ASSIGNMENT
  await prisma.shiftAssignment.create({
    data: {
      shiftId: shift1.id,
      userId: staff[0].id,
    },
  });

  console.log("✅ Seed completed");
}

main()
  .catch((err) => {
    console.error(err);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
