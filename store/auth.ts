import create from "zustand";
import { persist } from "zustand/middleware";

type AuthState = {
  loggedIn: boolean;
  setLoggedIn: (loggedIn: boolean) => void;
  expiresAt?: Date;
  userId?: string;
  userType?: "user" | "admin";
};

export const useAuthStore = create<AuthState>(
  persist(
    (set) => ({
      loggedIn: false,
      setLoggedIn: (loggedIn: boolean) => set({ loggedIn }),
    }),
    {
      name: "auth-storage",
    }
  )
);
