import Head from "next/head";
import Footer from "../components/footer";
import NavBar from "../components/navbar";
import Link from "next/link";

const signin = () => {
    return (
        <>
            <Head>
                <title>Sign In | Minefly</title>
            </Head>
            <NavBar />
            <div className="relative flex flex-grow justify-center items-center bg-gray-800">
                <div className="bg-gray-900 rounded shadow-2xl p-2">
                    <h2 className="text-lg font-semibold text-center">Sign In</h2>
                    <form className="mx-6 my-3 flex flex-col">
                        <label 
                            htmlFor="email" 
                            className="text-gray-300 text-sm pl-2"
                        >Email</label>
                        <input 
                            type="email" 
                            id="email" 
                            name="fname" 
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
                            name="lname" 
                            className="bg-gray-850 focus:outline-none rounded shadow px-2 py-1 w-80 " 
                            required
                        />

                        <input type="submit" value="Log In" className="btn btn-filled btn--primary mt-3" />
                    </form>
                    
                    <hr className="mx-10 my-5 " />
                    <div className="flex flex-col space-y-2">
                        <div className="flex justify-center">
                            <img src="/gsignin.png" className="w-48 cursor-pointer focus:border focus:border-blue-500" />
                        </div>
                        <div className="flex justify-center">
                            <img src="/gsignin.png" className="w-48 cursor-pointer focus:border focus:border-blue-500" />
                        </div>
                        <div className="flex justify-center">
                            <img src="/gsignin.png" className="w-48 cursor-pointer focus:border focus:border-blue-500" />
                        </div>
                    </div>
                    <Link href="/signup">
                        <p className="text-blue-500 hover:underline cursor-pointer text-xs text-center mt-2">Looking to sign up?</p>
                    </Link>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default signin;