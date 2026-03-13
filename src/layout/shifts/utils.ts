import { Assignment } from "@src/store/apis/shift/types";

export type CreateData = {
  id: string;
  locationName: string;
  locationTimezone: string;
  skillName: string;
  headCount: number;
  status: string;
  startDate: string;
  endDate: string;
  assignments: Assignment[];
};

export type OmitAssignment = Omit<CreateData, "assignments"> & {
  shiftId: string;
};
