import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { createUserSlice, UserState } from "./slices";
import { LocalStorage } from "@utils/storage";

type StoreState = UserState;

const PERSISTED_KEYS: (keyof StoreState)[] = [];

const useStore = create<StoreState>()(
  persist(
    (...args) => ({
      ...createUserSlice(...args),
    }),
    {
      name: "priority-soft-storage",
      storage: createJSONStorage(() => LocalStorage),
      partialize: (state) =>
        Object.fromEntries(
          Object.entries(state).filter(([key]) =>
            PERSISTED_KEYS.includes(key as keyof StoreState),
          ),
        ),
    },
  ),
);

export default useStore;
