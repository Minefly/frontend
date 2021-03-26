import Head from "next/head";
import DashboardLayout from "../../components/dashboard-layout";

const DashboardHome = () => {
	return (
		<>
			<Head>
				<title>Home | Minefly Dashboard</title>
			</Head>
			<DashboardLayout>
				<div className="container grid grid-cols-12 gap-4 my-6">
					<div className="col-span-12 card text-center flex flex-col sm:flex-row items-center justify-center sm:justify-start -mx-2">
						<div className="flex mb-2 sm:mb-0 items-center flex-wrap justify-center">
							<h2 className="text-xl font-bold mx-2 mb-2 sm:mb-0">Server 1</h2>
							<p className="bg-green-600 py-0.5 px-5 rounded-full mx-2 mb-2 sm:mb-0 h-min">
								Online
							</p>
						</div>
						<div className="hidden sm:block flex-1" />
						<button className="btn btn-filled btn--primary mx-2">
							Edit server
						</button>
					</div>
				</div>
			</DashboardLayout>
		</>
	);
};

export default DashboardHome;
