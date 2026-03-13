export type SwapRequestPayload = {
  shiftId: string;
  targetUserId: string;
};

export type SwapRequest = {
  id: string;
  shiftId: string;
  requesterId: string;
  targetUserId: string;
  status: string;
  createdAt: string;
  expiresAt: string;
  shift: Shift;
  requester: Requester;
};

export interface Shift {
  id: string;
  locationId: string;
  location: {
    id: string;
    name: string;
    timezone: string;
  };
  skillId: string;
  startDate: string;
  endDate: string;
  headCount: number;
  status: string;
  version: number;
  createdAt: string;
  updatedAt: string;
}

export interface Requester {
  id: string;
  name: string;
  email: string;
  role: string;
  createdAt: string;
  updatedAt: string;
}
