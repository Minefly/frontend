import create from "zustand";
import { persist } from "zustand/middleware";

export enum UserType {
  User = 1,
  Admin = 2,
}

// TODO
type AuthState = {
  loggedIn: boolean;
  userType?: UserType;
  logOut: () => void;
};

// TODO
export type LoginResult = {};

export const useAuthStore = create<AuthState>(
  persist(
    (set) => ({
      loggedIn: true,
      userType: UserType.User,
      logOut: () => set({ loggedIn: false }, true),
    }),
    { name: "auth-storage" }
  )
);
