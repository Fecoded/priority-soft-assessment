import { User } from "@src/store/types";
import { StateCreator } from "zustand";

export interface UserState {
  userDetails: User;
  setUserDetails: (userDetails: User) => void;
  users: User[];
  setUsers: (users: User[]) => void;
}

export const createUserSlice: StateCreator<UserState> = (
  set,
  _,
): UserState => ({
  userDetails: {} as User,
  setUserDetails: (userDetails) => set({ userDetails }),
  users: [],
  setUsers: (users) => set({ users }),
});
