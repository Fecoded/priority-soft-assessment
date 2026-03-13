export type Shift = {
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
  assignments: Assignment[];
};

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

export interface Assignment {
  id: string;
  shiftId: string;
  userId: string;
  user: User;
}

export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  role: string;
  createdAt: string;
  updatedAt: string;
}

export type ShiftRequest = {
  locationId: string;
  skillId: string;
  startTime: string; //"2026-06-01T17:00:00Z";
  endTime: string;
  headCount: number;
};

export type AssignShiftRequest = {
  shiftId: string;
  userId: string;
};

export type AssignShiftResponse = {
  success: boolean;
  errors: Error[];
  warnings: Error[];
  suggestions: Suggestion[];
};

export interface Error {
  code: string;
  message: string;
}

export interface Suggestion {
  id: string;
  name: string;
}
