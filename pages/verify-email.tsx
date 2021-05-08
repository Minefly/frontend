import Head from "next/head";
import Link from "next/link";
import { FormEvent, useRef, useState } from "react";
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
        const resp = await fetch(API_URL + "/auth/verify-email",
            {
                method: "POST",
                body: verCode.current!!.value
            });
        if (!resp.ok) {
            setError(`${resp.statusText} ${await resp.text()}` )
            return;
        } else {
        //TODO: Style everything and congratulate them for creating an account
        }
    }
  return <>
                <div className="relative flex flex-grow justify-center items-center bg-gray-800">
                <div className="bg-gray-900 rounded shadow-2xl p-2">
                    <h2 className="text-lg font-semibold text-center">Verify Email</h2>
                    <form className="mx-6 my-3 flex flex-col" onSubmit={handleSubmit}>
                        <label 
                            htmlFor="ver-code" 
                            className="text-gray-300 text-sm pl-2"
                        >Verification Code</label>
                        <input 
                            type="text" 
                            id="ver-code" 
                            name="fname"
                            ref={verCode}
                            className="bg-gray-850 focus:outline-none rounded shadow px-2 py-1 w-80 " 
                            required
                        />

                        {error != null ? <span /**TODO: Needs to be styled */>{error}</span> : ''}
                        <input type="submit" value="Verify" className="btn btn-filled btn--primary mt-3" />
                    </form>
                    
                    <Link href="/login">
                        <p className="text-blue-500 hover:underline cursor-pointer text-xs text-center mt-2">Looking to login?</p>
                    </Link>
                    <Link href="/signup">
                        <p className="text-blue-500 hover:underline cursor-pointer text-xs text-center mt-2">Looking to sign up?</p>
                    </Link>
                </div>
            </div>
  </>
}


export default verifyEmail;