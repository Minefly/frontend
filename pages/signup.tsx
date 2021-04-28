import Head from "next/head";
import Footer from "../components/footer";
import NavBar from "../components/navbar";
import Link from "next/link";
import { FormEvent, useRef, useState } from "react";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import { API_URL } from "./constants";

const signup = () => {
    return (
        <>
            <Head>
                <title>Sign Up | Minefly</title>
            </Head>
            <NavBar />
            <SignupForm />
            <Footer />
        </>
    );
};

const SignupForm = () => {
    const email = useRef<HTMLInputElement>(null);
    const password = useRef<HTMLInputElement>(null);
    const captchaRef = useRef(null);
    const [token, setToken] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);
    async function handleSubmit(event: FormEvent) {
        event.preventDefault();
        if (token == null) {
            setError("Please complete the captcha!");
            return;
        }
        const signupObj = {
            email: email.current!!.value,
            password: password.current!!.value,
            token,
        };
        const resp = await fetch(API_URL + "/signup/", {
            method: "POST",
            body: JSON.stringify(signupObj),
        });
        if (!resp.ok) {
            setError(`${resp.statusText} ${await resp.text()}`);
            return;
        }
    }
    return (
        <>
            <div className="relative flex flex-grow justify-center items-center bg-gray-800">
                <div className="bg-gray-900 rounded shadow-2xl p-2">
                    <h2 className="text-lg font-semibold text-center">
                        Sign up
                    </h2>
                    <form
                        className="mx-6 my-3 flex flex-col"
                        onSubmit={handleSubmit}
                    >
                        <label
                            htmlFor="email"
                            className="text-gray-300 text-sm pl-2"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="fname"
                            ref={email}
                            className="bg-gray-850 focus:outline-none rounded shadow px-2 py-1 w-80 "
                            required
                        />

                        <label
                            htmlFor="pass"
                            className="text-gray-300 text-sm pl-2 mt-3"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            id="pass"
                            ref={password}
                            name="lname"
                            className="bg-gray-850 focus:outline-none rounded shadow px-2 py-1 w-80 "
                            required
                        />
                        <p className="text-gray-300 text-sm">
                            By signing up you agree to the Privacy Policy and
                            the Terms of Service
                        </p>
                        {error != null ? (
                            <span /** Needs to be styled */>{error}</span>
                        ) : (
                            ""
                        )}
                        <HCaptcha
                            theme="dark"
                            sitekey={process.env["HCAPTCHA.SITEKEY"] ?? ""}
                            onVerify={setToken}
                            ref={captchaRef}
                        ></HCaptcha>
                        <input
                            type="submit"
                            value="Sign up"
                            className="btn btn-filled btn--primary mt-3"
                        />
                    </form>

                    <Link href="/login">
                        <p className="text-blue-500 hover:underline cursor-pointer text-xs text-center mt-2">
                            Looking to login?
                        </p>
                    </Link>
                    <Link href="/verify-email">
                        <p className="text-blue-500 hover:underline cursor-pointer text-xs text-center mt-2">
                            Looking to verify your email?
                        </p>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default signup;
