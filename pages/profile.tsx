import Footer from "../components/footer";
import NavBar from "../components/navbar";
import Link from "next/link";
import Head from "next/head";
import { useAuthStore } from "../store/auth";
import { useState } from "react";
import { useTheme } from "next-themes";

export default function profile() {
    const isLoggedIn = useAuthStore((state) => state.loggedIn);
    const uuid = "b597aac0011f41d0bab1edc1b809016e"; //replace with real uuid
    const name = "Imposter"; //replace with real name

    const [passOpen, setPassOpen] = useState(false);

    const { theme, setTheme } = useTheme();

    if (!isLoggedIn == false) {
        //remove the "!" when ready for prod
        return (
            //if theres a js way to do this, pls do it
            <>
                <Head>
                    <meta httpEquiv="Refresh" content="0; URL=/401" />
                </Head>
            </>
        );
    } else {
        return (
            <>
                <NavBar contained />
                <div className="flex flex-grow flex-col lg:flex-row container my-10 items-center md:items-stretch">
                    <div className="text-center md:text-left flex flex-col md:flex-row md:items-center lg:flex-col lg:items-stretch lg:text-center">
                        <img
                            className="rounded-full w-72 h-auto"
                            src={
                                "https://crafatar.com/avatars/" +
                                uuid +
                                "?overlay"
                            }
                        />
                        <div className="mt-6 md:mt-0 md:ml-12 lg:mt-6 lg:ml-0">
                            <h1 className="text-2xl font-bold">
                                {name}'s Account
                            </h1>
                            <Link href="/">
                                <a className="btn btn-filled btn--accent mt-4">
                                    Dashboard
                                </a>
                            </Link>
                        </div>
                    </div>
                    <div className="lg:ml-10 mt-10 lg:mt-0 card w-full">
                        <form className="grid grid-cols-2 w-full gap-8">
                            <label className="col-span-2 md:col-span-1">
                                Email
                                <input
                                    type="email"
                                    className="input block w-full"
                                />
                            </label>
                            <label className="col-span-2 md:col-span-1">
                                Phone Number
                                <input
                                    type="tel"
                                    className="input block w-full"
                                />
                            </label>
                            <label className="col-span-2 md:col-span-1">
                                Password
                                <input
                                    type="password"
                                    className="input block w-full"
                                />
                            </label>
                            <div>
                                &nbsp;
                                <button
                                    onClick={(e) => {
                                        e.preventDefault();
                                    }}
                                    className="btn btn-outlined btn--primary block"
                                >
                                    Enable 2FA
                                </button>
                            </div>
                            <button
                                type="submit"
                                className="col-span-2 btn btn-filled btn--accent"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                    <div className="mt-4 card w-full">
                        <h2 className="text-xl font-bold">Theme</h2>
                        <div>
                            <input
                                type="radio"
                                name="theme"
                                onClick={() => {
                                    setTheme("light");
                                }}
                            />{" "}
                            Light
                        </div>
                        <div>
                            <input
                                type="radio"
                                name="theme"
                                onClick={() => {
                                    setTheme("dark");
                                }}
                            />{" "}
                            Dark
                        </div>
                        <div>
                            <input
                                type="radio"
                                name="theme"
                                onClick={() => {
                                    setTheme("system");
                                }}
                            />{" "}
                            System
                        </div>
                    </div>
                </div>
                <Footer />
            </>
        );
    }
}
