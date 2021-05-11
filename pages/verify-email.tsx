import Head from "next/head";
import Link from "next/link";
import { FormEvent, useRef, useState } from "react";
import Warning from "../components/warning";
import Footer from "../components/footer";
import NavBar from "../components/navbar";
import { API_URL } from "./constants";

const verifyEmail = () => {
    return (
        <>
            <Head>
                <title>Email Verification | Minefly</title>
            </Head>
            <NavBar />
            <VerificationForm />
            <Footer />
        </>
    );
};

const VerificationForm = () => {
    const verCode = useRef<HTMLInputElement>(null);
    const [error, setError] = useState<string | null>(null);
    async function handleSubmit(event: FormEvent) {
        event.preventDefault();
        const resp = await fetch(API_URL + "/auth/verify-email", {
            method: "POST",
            body: verCode.current!!.value,
        });
        if (!resp.ok) {
            setError(`${resp.statusText}: ${await resp.text()}`);
            return;
        } else {
            //TODO: Congratulate the user for creating an account
        }
    }
    return (
        <>
            <div className="relative flex flex-grow justify-center items-center bg-gray-800">
                <div className="card">
                    <h2 className="text-lg font-semibold text-center">
                        Verify Email
                    </h2>
                    <form
                        className="mx-6 my-3 flex flex-col"
                        onSubmit={handleSubmit}
                    >
                        <label
                            htmlFor="ver-code"
                            className="dark:text-gray-300 text-sm"
                        >
                            Verification Code
                        </label>
                        <input
                            type="text"
                            id="ver-code"
                            name="fname"
                            ref={verCode}
                            className="input mt-1 mb-4"
                            required
                        />

                        {error && (
                            <Warning title="Error" className="mb-4">
                                {error}
                            </Warning>
                        )}
                        <button
                            type="submit"
                            className="btn btn-filled btn--primary"
                        >
                            Verify
                        </button>
                    </form>

                    <Link href="/login">
                        <p className="text-blue-500 hover:underline cursor-pointer text-xs text-center mt-2">
                            Looking to login?
                        </p>
                    </Link>
                    <Link href="/signup">
                        <p className="text-blue-500 hover:underline cursor-pointer text-xs text-center mt-2">
                            Looking to sign up?
                        </p>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default verifyEmail;
