import create from "zustand";
import { persist } from "zustand/middleware";

export enum UserType {
  User = 1,
  Admin = 2,
}

// TODO
type AuthState = {};

// TODO
export type LoginResult = {};

export const useAuthStore = create<AuthState>(
  persist((set) => ({}), { name: "auth-storage" })
);
