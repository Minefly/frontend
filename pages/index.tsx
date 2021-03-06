import Head from "next/head";
import { useState, useEffect } from "react";
import Card from "../components/card";
import Footer from "../components/footer";
import NavBar from "../components/navbar";
import Link from "next/link";
import { API_URL } from "./constants";

const Home = () => {
    return (
        <>
            <Head>
                <title>Home | Minefly</title>
            </Head>
            <NavBar contained nopadding />
            <div className="banner w-full relative h-200">
                <div className="banner-img-container">
                    <div className={`banner-img`} />
                </div>
                <div className="text-center lg:text-left text-gray-200 font-extrabold absolute z-10 top-2/5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 container">
                    <h1 className="text-2xl sm:text-4xl xl:text-7xl my-4 text-primary-50">
                        Free, community-first
                        <br />
                        Minecraft server hosting
                    </h1>
                    <Link href="/dashboard">
                        <a className="mt-4 btn btn-big btn-outlined w-max select-none">
                            Get started
                        </a>
                    </Link>
                </div>
            </div>
            <div className="h-32 w-6/5 min-w-200 bg-white dark:bg-gray-800 rounded-1/2 relative bottom-16 left-1/2 transform -translate-x-1/2 -mb-32" />
            <main className="container relative">
                <div className="flex flex-col md:flex-row md:flex-wrap md:-mx-4">
                    <Card
                        title="Completely Free"
                        className="my-4 md:flex-1 px-8 pt-10 pb-12 md:mx-4 lg:my-0 text-center"
                    >
                        All users have access to a free Minecraft server, no
                        credit card or payment required.
                    </Card>
                    <Card
                        title="Community First"
                        className="my-4 md:relative md:bottom-4 md:flex-1 px-8 pt-10 pb-12 md:mx-4 lg:my-0 text-center"
                    >
                        We value our community and strive to make our services
                        the best they can be for our users. We take user input
                        seriously and consider all your feedback.
                    </Card>
                    <Card
                        title="Quality Service"
                        className="my-4 md:flex-1 px-8 pt-10 pb-12 md:mx-4 lg:my-0 text-center"
                    >
                        Our servers are equipped with powerful processors and
                        fast SSDs. We also have a support team you can talk to
                        in real-time if you're having issues.
                    </Card>
                </div>
            </main>
            <Footer className="mt-12" />
        </>
    );
};

export default Home;
