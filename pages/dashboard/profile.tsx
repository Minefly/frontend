import Footer from "../../components/footer";
import NavBar from "../../components/navbar";
import Link from "next/link";
import Head from "next/head";
import { useAuthStore } from "../../store/auth";
import { useState } from "react";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import four01 from "../401";

export default function profile() {
  const [isLoggedIn, id] = useAuthStore((state => [state.loggedIn, state.userId]));
    const uuid = id; //replace with real uuid
  const router = useRouter();

    const { theme, setTheme } = useTheme();

    if (isLoggedIn == false) {
      return four01();
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
                                Your Account
                            </h1>

                        </div>
                    </div>
                    <div className="lg:ml-10 mt-10 lg:mt-0 w-full">
                        <div className="card w-full">
                            <form className="grid grid-cols-2 w-full gap-8">
                                <div className="col-span-2 md:col-span-1">
                                    <label>Email</label>
                                    <input
                                        type="email"
                                        className="input block w-full"
                                    />
                                </div>
                                <div className="col-span-2 md:col-span-1">
                                    <label>Password</label>
                                    <input
                                        type="password"
                                        className="input block w-full"
                                    />
                                </div>
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
                            <label className="block">
                                <input
                                    type="radio"
                                    name="theme"
                                    checked={theme === "light"}
                                    onChange={() => {
                                        setTheme("light");
                                    }}
                                    className="radio"
                                />{" "}
                                Light
                            </label>
                            <label className="block">
                                <input
                                    type="radio"
                                    name="theme"
                                    checked={theme === "dark"}
                                    onChange={() => {
                                        setTheme("dark");
                                    }}
                                    className="radio"
                                />{" "}
                                Dark
                            </label>
                            <label className="block">
                                <input
                                    type="radio"
                                    name="theme"
                                    checked={theme === "system"}
                                    onChange={() => {
                                        setTheme("system");
                                    }}
                                    className="radio"
                                />{" "}
                                System
                            </label>
                        </div>
                    </div>
                </div>
                <Footer />
            </>
        );
    }
}
