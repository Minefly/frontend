import Head from "next/head";
import Footer from "../components/footer";
import NavBar from "../components/navbar";
import Link from "next/link";
import { FormEvent, useRef, useState } from "react";
import { API_URL } from "./constants";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import axios from "axios";
import { LoginResult, useAuthStore, UserType } from "../store/auth";
import { Router, useRouter } from "next/router";
import Warning from "../components/warning";
//TODO: When the user loads this check if they have 2fa enabled and if so ask them for tfa when they log in

const login = () => {
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [token, setToken] = useState<string>();
  const [error, setError] = useState<string>();
  const [rememberMe, setRememberMe] = useState<boolean>();
  let [setLoginData, userType] = useAuthStore((state) => [state.setLoginData, state.userType]);
    const [tfaCode, setTfaCode] = useState<number>();
    const router = useRouter();
    let [tfaForm, showTfaForm] = useState<boolean>(false);
    async function handleSubmit(event: FormEvent) {
        event.preventDefault();
        if (token == null && process.env.NODE_ENV == "production") {
            setError("Please complete the captcha!");
            return;
        }
        const userData = await fetch(
            API_URL + "/users/data/" + email
        );
        if (!userData.ok) {
            setError("An error was encountered! Please try again");
            return;
        }
        const json = await userData.json();
      const tfa_enabled = json.tfa_enabled as boolean;
      console.log(tfa_enabled )
        if (tfa_enabled && tfaCode == null) {
            showTfaForm(true);
        } else {
            const loginObj: {
                email: string;
                password: string;
                remember_me: boolean;
                token: string;
                tfa_token: number | null;
            } = {
                email: email!!,
                password: password!!,
                remember_me: rememberMe!!,
                token: process.env.NODE_ENV == "production" ? token!! : "e",
                tfa_token: null,
          };
          console.log(loginObj)
            if (tfaCode != null) loginObj.tfa_token = tfaCode;
            const resp = await fetch(API_URL + "/auth/login", {
                body: JSON.stringify(loginObj),
                method: "POST",
                credentials: "include",
            });

            if (!resp.ok) {
                setError(`${resp.statusText}: ${await resp.text()}`);
                return;
            } else {
                const body: LoginResult = await resp.json();
              setLoginData(body);
              if (userType == UserType.Admin) {
                router.push("/admin/dashboard")
              } else {
                router.push("/dashboard");
              }
            }
        }
    }
    return (
        <>
            <Head>
                <title>Login | Minefly</title>
            </Head>
            <NavBar />
            <div className="relative flex flex-grow justify-center items-center">
          {tfaForm ? (
            <div className="card w-[30rem] max-w-full mx-8">
              <h2 className="text-lg font-semibold text-center">
                Two-Factor Code Verification
                        </h2>
              <form
                className="mx-6 my-3 flex flex-col"
                onSubmit={handleSubmit}
              >
                <label
                  htmlFor="tfa-code"
                  className="dark:text-gray-300 text-sm"
                >
                  Two-Factor Code
                            </label>
                <input
                  type="text"
                  id="tfa-code"
                  name="fname"
                  className="input mb-4 mt-1"
                  required
                  onKeyUp={(e) => setTfaCode(parseInt(e.currentTarget.value))}
                />
                                <button
                  type="submit"
                  className="btn btn-filled btn--primary mt-4"
                >
                  Verify Code
                            </button>
              </form>
            </div>
          ) : (
            <div className="card w-[30rem] max-w-full mx-8">
              <h2 className="text-lg font-semibold text-center">
                Login
                        </h2>
              <form
                className="mx-6 my-3 flex flex-col"
                onSubmit={handleSubmit}
              >
                <label
                  htmlFor="email"
                  className="dark:text-gray-300 text-sm"
                >
                  Email
                            </label>
                <input
                  type="email"
                  id="email"
                  name="fname"
                  className="input mb-4 mt-1"
                  required
                  onKeyUp={(e) => setEmail(e.currentTarget.value)}
                />

                <label
                  htmlFor="pass"
                  className="dark:text-gray-300 text-sm"
                >
                  Password
                            </label>
                <input
                  type="password"
                  id="pass"
                  name="lname"
                  className="input mb-4 mt-1"
                  required
                 onKeyUp={(e) => setPassword(e.currentTarget.value)}
                />
                <label
                  htmlFor="remember-me"
                  className="dark:text-gray-300 text-sm mb-4 "
                >
                  <input
                    type="checkbox"
                    id="remember-me"
                    name="rname"
                    className="checkbox mr-2"
                    onChange={(e) => setRememberMe(e.currentTarget.value == "on")}
                  />
                                Remember me?
                            </label>
                {error && (
                  <Warning title="Error" className="mb-4">
                    {error}
                  </Warning>
                )}
                <HCaptcha
                  sitekey={process.env["HCAPTCHA.SITEKEY"] ?? ""}
                  onVerify={setToken}
                ></HCaptcha>
                <button
                  type="submit"
                  className="btn btn-filled btn--primary mt-4"
                >
                  Log in
                            </button>
              </form>

              <hr className="mx-10 my-5 " />
              <div className="flex flex-col space-y-2">
                <div className="flex justify-center">
                  <img
                    src="/gsignin.png"
                    className="w-48 cursor-pointer focus:border focus:border-blue-500"
                  />
                </div>
                <div className="flex justify-center">
                  <img
                    src="/gsignin.png"
                    className="w-48 cursor-pointer focus:border focus:border-blue-500"
                  />
                </div>
                <div className="flex justify-center">
                  <img
                    src="/gsignin.png"
                    className="w-48 cursor-pointer focus:border focus:border-blue-500"
                  />
                </div>
              </div>
              <Link href="/signup">
                <p className="text-blue-500 hover:underline cursor-pointer text-xs text-center mt-2">
                  Looking to sign up?
                            </p>
              </Link>
            </div>
          )}
            </div>
            <Footer />
        </>
    );
};

export default login;
