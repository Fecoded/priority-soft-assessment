export type ListResponse<T> = {
  status: boolean;
  message: string;
  data: T;
};

export type LoginCredential = {
  email: string;
  password: string;
};

export type Role = "ADMIN" | "STAFF" | "MANAGER";

export type RegisterCredential = {
  name: string;
  email: string;
  password: string;
  role?: Role;
};

export type Availability = {
  id: string;
  userId: string;
  dayOfWeek: number;
  startTime: string;
  endTime: string;
  isException: boolean;
  specificDate: Date | null;
};

export type Skill = {
  id: string;
  name: string;
};
export type Certification = {
  id: string;
  name: string;
  timezone: string;
};

export type User = {
  name: string;
  id: string;
  email: string;
  password: string;
  role: Role;
  desiredHours: number | null;
  createdAt: Date;
  updatedAt: Date;
  availability: Availability[];
  skills: Skill[];
  certifications: Certification[];
};

export type UserShift = {
  id: string;
  shiftId: string;
  userId: string;
  shift: Shift;
};

export interface Shift {
  id: string;
  locationId: string;
  skillId: string;
  startDate: string;
  endDate: string;
  headCount: number;
  status: string;
  version: number;
  createdAt: string;
  updatedAt: string;
  location: Location;
  requiredSkill: RequiredSkill;
}

export interface Location {
  id: string;
  name: string;
  timezone: string;
  createdAt: string;
}

export interface RequiredSkill {
  id: string;
  name: string;
}
