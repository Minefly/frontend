import Head from "next/head";
import Footer from "../components/footer";
import NavBar from "../components/navbar";
import Link from "next/link";

export default function Page401() {
    return (
        <>
            <Head>
                <title>401 | Minefly</title>
            </Head>
            <NavBar />
            <div className="container text-center my-44">
                <h1 className="font-extrabold text-3xl sm:text-5xl xl:text-7xl my-4 dark:text-gray-200">
                    Aw, snap!
                </h1>
                <h2 className="font-semibold text-xl sm:text-2xl xl:text-4xl my-4 dark:text-gray-200">
                    401 Not Allowed
                </h2>
                <p className="sm:text-lg xl:text-xl my-4">
                    It seems the page you were looking for is hidden from public view.
                    If you believe this to be an error, <a href="https://github.com/Minefly/frontend/issues" className="text-blue-500 hover:underline">make an issue on github</a>.
                </p>
                <Link href="/">
                    <a className="mt-4 btn btn-outlined btn--accent select-none">
                        Back to homepage
                    </a>
                </Link>
                <a 
                    className="ml-2 mt-4 btn btn-filled btn--accent select-none"
                    onClick={() => history.back()}
                >
                    Back
                </a>
            </div>
            <Footer />
        </>
    );
};
