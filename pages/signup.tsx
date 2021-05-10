import Head from "next/head";
import Footer from "../components/footer";
import NavBar from "../components/navbar";
import Link from "next/link";
import { FormEvent, KeyboardEvent, useRef, useState } from "react";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import { API_URL } from "./constants";
import { useRouter } from "next/router";
import axios from "axios";
import { InferGetStaticPropsType } from "next";

type Passes = string[];

export const getStaticProps = async () => {
    const tenkpasswords = await axios.get(
        "https://raw.githubusercontent.com/danielmiessler/SecLists/master/Passwords/Common-Credentials/10k-most-common.txt"
    );
    let tenkpass: Passes = tenkpasswords.data.split("\n");
    return { props: { passes: tenkpass } };
};

const signup = ({ passes }: InferGetStaticPropsType<typeof getStaticProps>) => {
    return (
        <>
            <Head>
                <title>Sign Up | Minefly</title>
            </Head>
            <NavBar />
            <SignupForm passes={passes} />
            <Footer />
        </>
    );
};

const SignupForm = ({
    passes,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
    const router = useRouter();
    const email = useRef<HTMLInputElement>(null);
    const [password, setPassword] = useState<string | null>(null);
    const captchaRef = useRef(null);
    const [token, setToken] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);
    async function handleSubmit(event: FormEvent) {
        event.preventDefault();
        console.log(process.env.NODE_ENV, setToken("10"), token);
        if (token == null && process.env.NODE_ENV == "production") {
            setError("Please complete the captcha!");
            return;
        }
        const signupObj = {
            email: email.current!!.value,
            password,
            token: process.env.NODE_ENV == "production" ? token : "e",
        };
        const resp = await fetch(API_URL + "/auth/signup", {
            method: "POST",
            body: JSON.stringify(signupObj),
        });
        if (!resp.ok) {
            setError(`${resp.statusText} ${await resp.text()}`);
            return;
        } else {
            router.push("/verify-email");
            //TODO: Send them a message saying they need to verify the mail
        }
    }
    function checkPassword(event: KeyboardEvent) {
        let elem = event.target as HTMLInputElement;
        let pass = elem.value;
        if (pass.length < 8) {
            setError("The password is too short!");
            return;
        }
        if (passes.includes(pass)) {
            setError(
                "The password is among the top 10,000 most used passwords.\nPlease choose a more secure one."
            );
            return;
        }
        setError("");
        setPassword(pass);
    }
    return (
        <>
            <div className="relative flex flex-grow justify-center items-center">
                <div className="card w-[30rem] max-w-full mx-8">
                    <h2 className="text-lg font-semibold text-center">
                        Sign up
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
                            ref={email}
                            className="input mb-4 mt-1"
                            required
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
                            onKeyUp={checkPassword}
                        />
                        <p className="dark:text-gray-300 text-sm mb-4">
                            By signing up you agree to the Privacy Policy and
                            the Terms of Service
                        </p>
                        {error != null ? (
                            <span /**TODO: Needs to be styled */>{error}</span>
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
                            className="btn btn-filled btn--primary mt-4"
                        >
                            Sign up
                        </button>
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
