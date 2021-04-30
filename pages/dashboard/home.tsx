import Head from "next/head";
import Link from "next/link";
import { FC } from "react";
import DashboardLayout from "../../components/dashboard-layout";

const DashboardHome: FC = () => {
    return (
        <>
            <Head>
                <title>Home | Minefly Dashboard</title>
            </Head>
            <DashboardLayout>
                <div className="container grid grid-cols-12 gap-4 my-6">
                    <div className="col-span-12 card text-center flex flex-col sm:flex-row items-center justify-center sm:justify-start -mx-2">
                        <div className="flex mb-2 sm:mb-0 items-center flex-wrap justify-center">
                            <h2 className="text-xl font-bold mx-2 mb-2 sm:mb-0">
                                SomeServer
                            </h2>
                            <p className="chip bg-green-600 text-white">
                                Online
                            </p>
                        </div>
                        <div className="hidden sm:block flex-1" />
                        <Link href="/dashboard/server/SomeServer">
                            <a className="btn btn-filled btn--primary mx-2">
                                Edit server
                            </a>
                        </Link>
                    </div>
                </div>
            </DashboardLayout>
        </>
    );
};

export default DashboardHome;
