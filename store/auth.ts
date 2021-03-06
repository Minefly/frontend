import create from "zustand";
import { persist } from "zustand/middleware";

export enum UserType {
  User = 1,
  Admin = 2,
}

type AuthState = {
  loggedIn: boolean;
  logOut: () => void;
  expiresAt?: Date;
  userId?: string;
  userType?: UserType;
  uses_tfa?: boolean;
  setLoginData: (data: LoginResult) => void;
  setUsesTfa: (data: boolean) => void;
};

export type LoginResult = {
  expires_at: number;
  id: string;
  user_type: number;
};

export const useAuthStore = create<AuthState>(
  persist(
    (set) => ({
      loggedIn: true,
      userType: UserType.Admin,
      logOut: () => set({ loggedIn: false }, true),
      setLoginData: (data: LoginResult) =>
        set({
          loggedIn: true,
          expiresAt: new Date(data.expires_at),
          userType: data.user_type as UserType,
          userId: data.id,
        }),
      uses_tfa: false,
      setUsesTfa: (data: boolean) => set({ uses_tfa: data }),
    }),
    {
      name: "auth-storage",
    }
  )
);
