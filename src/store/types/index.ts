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
  userId: string;
  skillId: string;
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
};
