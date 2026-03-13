# ShiftSync MVP — Multi-Location Staff Scheduling Platform

## Overview

**ShiftSync** is a simplified MVP scheduling system designed for a multi-location restaurant group.
The system allows administrators and managers to schedule staff shifts across locations while enforcing real-world workforce constraints such as skill requirements, certifications, rest periods, and shift conflicts.

The application is built using:

- **Next.js** (App Router) — API + UI
- **Prisma ORM**
- **SQLite** — development database for MVP simplicity

The goal of this MVP is to demonstrate a **clean scheduling architecture**, enforce **realistic business rules**, and provide a **foundation for future scalability**.

---

# Tech Stack

| Layer          | Technology                                |
| -------------- | ----------------------------------------- |
| Frontend       | Next.js (React)                           |
| Backend        | Next.js API Routes                        |
| ORM            | Prisma                                    |
| Database       | SQLite                                    |
| Authentication | Session-based or JWT (MVP implementation) |

---

# Core System Concepts

The system models a restaurant group operating multiple locations with staff that have:

- **Skills** (e.g., Bartender, Server, Cook)
- **Location Certifications** (staff must be approved to work at specific locations)
- **Availability and work limits**

Managers schedule **shifts** requiring certain skills and assign staff while respecting scheduling constraints.

---

# Data Model

Core entities used in the system.

```
User
Location
Skill
StaffSkill
Certification
Shift
ShiftAssignment
SwapRequest
```

---

# Database Models

## User

Represents system users.

Roles:

```
ADMIN
MANAGER
STAFF
```

Example fields:

```
id
name
email
password
role
desiredHours
```

---

## Location

Represents restaurant locations.

```
Location
- id
- name
- timezone
```

All shifts belonging to a location use the **location timezone** for display.

Internally, times are stored in **UTC**.

---

## Skill

Represents a work capability.

Examples:

```
Bartender
Server
Cook
Host
```

Managers schedule shifts requiring specific skills.

---

## StaffSkill

Links staff members to skills they possess.

```
StaffSkill
- userId
- skillId
```

Used during shift assignment validation.

---

## Certification

Represents approval for a staff member to work at a location.

```
Certification
- userId
- locationId
```

A user must be certified for a location before being scheduled there.

Unique constraint prevents duplicates.

```
@@unique([userId, locationId])
```

---

## Shift

Represents a work shift needing staff.

Example:

```
Location: Chicago
Skill: Server
Time: 17:00 – 22:00
Headcount: 3
```

Fields:

```
Shift
- locationId
- skillId
- startDate
- endDate
- headCount
```

---

## ShiftAssignment

Represents a staff member working a shift.

```
ShiftAssignment
- shiftId
- userId
```

Constraint:

```
@@unique([shiftId, userId])
```

Prevents assigning the same user to a shift twice.

---

## SwapRequest

Allows staff members to swap shifts.

```
SwapRequest
- shiftId
- requesterId
- targetUserId
- status
- createdAt
- expiresAt
```

Statuses:

```
PENDING
ACCEPTED
REJECTED
EXPIRED
CANCELLED
```

`expiresAt` ensures swap requests cannot remain open indefinitely.

---

# Module Architecture

The MVP was developed in **four main modules**.

---

# Module 1 — Authentication & Users

## Purpose

Provide authentication and role-based access.

## Features

- User registration
- Login
- Role management

Roles control API access.

| Role    | Capabilities                  |
| ------- | ----------------------------- |
| Admin   | Manage system                 |
| Manager | Schedule staff                |
| Staff   | View shifts and request swaps |

---

# Module 2 — Locations, Skills & Certifications

## Purpose

Define scheduling prerequisites.

Managers cannot assign staff unless they meet requirements.

---

## Skills

Created by **Admins**.

```
POST /api/skills
```

Managers assign skills to staff.

```
POST /api/users/:id/skills
```

---

## Certifications

Managers certify staff for locations.

```
POST /api/users/:id/certifications
```

Validation ensures:

```
user must be certified for location before assignment
```

---

# Module 3 — Core Scheduling Engine

This is the **most critical part of the system**.

Managers create shifts and assign staff while the system enforces multiple constraints.

---

## Shift Creation

```
POST /api/shifts
```

Example request:

```
{
  locationId,
  skillId,
  startDate,
  endDate,
  headCount
}
```

---

## Shift Assignment

```
POST /api/shifts/:id/assign
```

Before assignment is saved, the system runs **validation checks**.

---

# Scheduling Validation Rules

The system prevents invalid schedules using multiple checks.

---

## Skill Validation

Staff must possess the required skill.

```
checkSkillMatch()
```

---

## Location Certification

Staff must be certified for the location.

```
checkCertification()
```

---

## Double Booking Prevention

Staff cannot work overlapping shifts.

```
checkDoubleBooking()
```

---

## Rest Period Rule

Minimum rest between shifts.

```
10 hours minimum rest
```

Implemented via:

```
checkRestPeriod()
```

---

## Daily Work Limit

Staff should not exceed safe daily work limits.

Rules:

```
> 8 hours → warning
> 12 hours → block
```

---

## Weekly Hours Limit

Tracks weekly workload.

```
> 40 hours → warning
```

---

## Headcount Limit

Cannot assign more staff than the shift requires.

```
assignments.length < headCount
```

---

# Alternative Staff Suggestions

If assignment fails, the system attempts to suggest other staff members.

Example:

```
Sarah unavailable
Suggested replacements:
John
Maria
```

Suggestion logic:

1. Staff must have required skill
2. Must be certified for location
3. Must pass scheduling validation

---

# Module 4 — Staff Actions & Shift Swaps

Staff can interact with their schedules.

---

## View Assigned Shifts

```
GET /api/me/shifts
```

Returns the logged-in staff member’s schedule.

---

## Request Shift Swap

```
POST /api/swaps
```

Staff requests another user to take their shift.

Swap request includes:

```
shiftId
targetUserId
expiresAt
```

Expiration prevents outdated swap approvals.

---

## Accept Swap

```
POST /api/swaps/:id/accept
```

Before approval the system checks:

- swap still pending
- swap not expired
- shift not started
- requester still owns shift
- target user still eligible

If valid, the system performs a **transaction**:

```
remove requester assignment
create new assignment
update swap status
```

---

## Cancel Swap

```
DELETE /api/swaps/:id
```

Allows the requester to cancel pending swaps.

---

# Swap Edge Cases Handled

The system protects against:

- swap expiration
- shift already started
- requester no longer owning shift
- concurrent swap acceptance
- multiple swaps for the same shift

---

# Scheduling Design Decisions

Some requirements were intentionally unspecified in the assessment.

The following decisions were made for the MVP.

---

## Decertification

Removing certification prevents **future scheduling only**.

Historical assignments remain unchanged to preserve audit integrity.

---

## Desired Hours

Desired hours are treated as **soft constraints**.

The system issues warnings if exceeded but does not block assignments.

---

## Consecutive Work Days

Consecutive days are counted by **calendar day**, while fatigue protection is enforced through daily and weekly hour limits.

---

## Shift Edits After Swap

Once a swap is accepted, it becomes a normal assignment.

If the shift is edited later, scheduling validations run again and managers are alerted to conflicts.

---

## Timezone Boundaries

Each location has a **single canonical timezone**.

All times are stored in **UTC** and converted to the location timezone for display.

---

# API Summary

| Endpoint                           | Description        | Role           |
| ---------------------------------- | ------------------ | -------------- |
| POST /api/auth/login               | User login         | Public         |
| POST /api/users                    | Create user        | Admin          |
| GET /api/users                     | List users         | Admin, Manager |
| POST /api/skills                   | Create skill       | Admin          |
| POST /api/users/:id/skills         | Assign skill       | Admin, Manager |
| POST /api/users/:id/certifications | Certify staff      | Admin, Manager |
| POST /api/shifts                   | Create shift       | Admin, Manager |
| GET /api/shifts                    | List shifts        | All            |
| POST /api/shifts/:id/assign        | Assign staff       | Admin, Manager |
| GET /api/users/shifts              | View own shifts    | Staff          |
| POST /api/swaps                    | Request swap       | Staff          |
| GET /api/swaps                     | View swap requests | Staff          |
| POST /api/swaps/:id/accept         | Accept swap        | Target Staff   |
| DELETE /api/swaps/:id              | Cancel swap        | Requester      |

---

# Running the Project

Install dependencies:

```
npm install
```

Run migrations:

```
npx prisma migrate dev
```

Seed the database:

```
npx prisma db seed
```

Start the application:

```
npm run dev
```

---

## Seeded Test Accounts

For convenience during development and evaluation, the database seed script creates several test users representing different roles in the system.

You can use the following credentials to log in and test different permissions.

### Admin Account

Role: **ADMIN**

Email:
[admin@test.com](mailto:admin@test.com)

Password:
password123

Capabilities:

- Manage users
- Create skills
- Manage locations
- Create and manage shifts
- Assign staff

---

### Manager Account

Role: **MANAGER**

Email:
[manager.ny@test.com](mailto:manager.ny@test.com)

Password:
password123

Capabilities:

- Create shifts
- Assign staff to shifts
- Assign skills to staff
- Certify staff for locations
- View swap requests

---

### Staff Accounts

Role: **STAFF**

Account 1

Email:
[sarah@test.com](mailto:sarah@test.com)

Password:
password123

Capabilities:

- View assigned shifts
- Request shift swaps
- Accept swap requests

---

Account 2

Email:
[samsmith@gmail.com](mailto:samsmith@gmail.com)

Password:
password123

Capabilities:

- View assigned shifts
- Accept swap requests
- Participate in shift swaps

---

These accounts are created automatically when running the seed script:

```
npx prisma db seed
```

Using these accounts allows reviewers to quickly test the full scheduling workflow, including:

- shift creation by managers
- staff assignment
- validation rules
- shift swap requests
- swap acceptance flows

# Future Improvements

Potential enhancements beyond MVP:

- Availability windows for staff
- Smart shift recommendations
- Automatic scheduling optimization
- Notifications for swaps
- Calendar integrations
- PostgreSQL production database
- Real-time updates via WebSockets

---

# Conclusion

ShiftSync demonstrates a simplified but realistic workforce scheduling platform capable of:

- managing staff skills and certifications
- enforcing scheduling constraints
- preventing conflicts
- supporting shift swaps
- suggesting alternative staff when conflicts occur

The architecture focuses on **clear validation layers**, **modular services**, and **transactional safety**, providing a solid foundation for scaling into a full production scheduling system.
