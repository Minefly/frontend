import create from "zustand";
import { persist } from "zustand/middleware";

enum UserType {
  User = 1,
  Admin = 2,
}

type AuthState = {
  loggedIn: boolean;
  setLoggedIn: (loggedIn: boolean) => void;
  expiresAt?: Date;
  userId?: string;
  userType?: UserType;
  setLoginData: (data: LoginResult) => void;
};

export type LoginResult = {
  expires_at: number;
  id: string;
  user_type: number;
};

export const useAuthStore = create<AuthState>(
  persist(
    (set) => ({
      loggedIn: false,
      setLoggedIn: (loggedIn: boolean) => set({ loggedIn }),
      setLoginData: (data: LoginResult) =>
        set({
          loggedIn: true,
          expiresAt: new Date(data.expires_at),
          userType: data.user_type as UserType,
          userId: data.id,
        }),
    }),
    {
      name: "auth-storage",
    }
  )
);
