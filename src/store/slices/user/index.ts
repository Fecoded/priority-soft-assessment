import { StateCreator } from "zustand";

export interface UserState {
  userDetails: { name: string; email: string };
  setUserDetails: (userDetails: { name: string; email: string }) => void;
}

export const createUserSlice: StateCreator<UserState> = (
  set,
  _,
): UserState => ({
  userDetails: { name: "", email: "" },
  setUserDetails: (userDetails) => set({ userDetails }),
});
