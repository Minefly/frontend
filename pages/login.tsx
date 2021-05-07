import Head from "next/head";
import Footer from "../components/footer";
import NavBar from "../components/navbar";
import Link from "next/link";
import { FormEvent, useRef, useState } from "react";
import { API_URL } from "./constants";
import HCaptcha from "@hcaptcha/react-hcaptcha";

const login = () => {
      const email = useRef<HTMLInputElement>(null);
    const password = useRef<HTMLInputElement>(null);
    const captchaRef = useRef(null);
    const [token, setToken] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const rememberMe = useRef<HTMLInputElement>(null);
    async function handleSubmit(event: FormEvent) {
      event.preventDefault();
        console.log(process.env.NODE_ENV, setToken("10"), token)
        if (token == null && process.env.NODE_ENV == "production") {
            setError("Please complete the captcha!");
            return;
        }
        const loginObj = {
            email: email.current!!.value,
            password: password.current!!.value,
          remember_me: rememberMe.current!!.value == "on",
            token: process.env.NODE_ENV == "production" ? token : "e"
      };
        const resp = await fetch(API_URL + "/auth/login", {
            method: "POST",
            body: JSON.stringify(loginObj),
        });
        if (!resp.ok) {
            setError(`${resp.statusText} ${await resp.text()}`);
            return;
        } else {
            //TODO: Move them to the dashboard
        }
  }
  //TODO: Add a 'remember me' button
    return (
        <>
            <Head>
                <title>Login | Minefly</title>
            </Head>
            <NavBar />
            <div className="relative flex flex-grow justify-center items-center">
                <div className="card dark:!bg-gray-900 w-max">
                    <h2 className="text-lg font-semibold text-center">Login</h2>
                    <form className="mx-6 my-3 flex flex-col" onSubmit={handleSubmit}>
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
                            className="input mb-4"
                required
                ref={email}
              
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
                            className="input"
                required
                ref={password}
              />
              <span><label htmlFor="remember-me" className="dark:text-gray-300 text-sm">Remember me?</label>
              <input type="checkbox" id="remember-me" name="rname" ref={rememberMe}></input></span>
                                      {error != null ? (
                            <span /** Needs to be styled */>{error}</span>
                        ) : (
                            ""
                        )}          
              <HCaptcha

                            sitekey={process.env["HCAPTCHA.SITEKEY"] ?? ""}
                            onVerify={setToken}
                            ref={captchaRef}
                        ></HCaptcha>
                        <button
                            type="submit"
                            className="btn btn-filled btn--primary mt-3"
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
            </div>
            <Footer />
        </>
    );
};

export default login;
