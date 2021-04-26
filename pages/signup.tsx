import Head from "next/head";
import Footer from "../components/footer";
import NavBar from "../components/navbar";
import Link from "next/link";
import { FormEvent, useRef } from "react";

const signup = () => {
    const email = useRef<HTMLInputElement>(null);
    const password = useRef<HTMLInputElement>(null);
    function handleSubmit(event: FormEvent) {
        
    }

    return (
        <>
            <Head>
                <title>Sign Up | Minefly</title>
            </Head>
            <NavBar />
            <div className="relative flex flex-grow justify-center items-center bg-gray-800">
                <div className="bg-gray-900 rounded shadow-2xl p-2">
                    <h2 className="text-lg font-semibold text-center">Sign up</h2>
                    <form className="mx-6 my-3 flex flex-col" onSubmit={handleSubmit}>
                        <label 
                            htmlFor="email" 
                            className="text-gray-300 text-sm pl-2"
                        >Email</label>
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
                        >Password</label>
                        <input 
                            type="password" 
                            id="pass"
                            ref={password}
                            name="lname" 
                            className="bg-gray-850 focus:outline-none rounded shadow px-2 py-1 w-80 " 
                            required
                        />
                        <input type="submit" value="Sign up" className="btn btn-filled btn--primary mt-3" />
                    </form>
                    
                    <Link href="/login">
                        <p className="text-blue-500 hover:underline cursor-pointer text-xs text-center mt-2">Looking to login?</p>
                    </Link>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default signup;