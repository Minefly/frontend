import Head from "next/head";
import Footer from "../components/footer";
import NavBar from "../components/navbar";
import Link from "next/link";

const login = () => {
    return (
        <>
            <Head>
                <title>Login | Minefly</title>
            </Head>
            <NavBar />
            <div className="relative flex flex-grow justify-center items-center">
                <div className="card dark:!bg-gray-900 w-1/5">
                    <h2 className="text-lg font-semibold text-center">Login</h2>
                    <form className="mx-6 my-3 flex flex-col">
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
                        />

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
