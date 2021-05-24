import { NextPage } from "next";
import { useRouter } from "next/router";
import { ReactElement } from "react";
import { useAuthStore, UserType } from "../store/auth";


export default function withAuthRedirect<CP = {}, IP = CP>(
  WrappedComponent:NextPage<CP, IP>,
  expectedAuth: UserType,
  location: string):
  NextPage<CP, IP> {
  const WithAuthRedirectWrapper: NextPage<CP, IP> = props => {
    const router = useRouter();
    const loginType = useAuthStore(state => state.userType);
    if (expectedAuth !== loginType) {
      router.push(location);
      return <></>;
    }
    return <WrappedComponent {...props} />;
  };

  return WithAuthRedirectWrapper;
}