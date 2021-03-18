import Head from "next/head";
import DashboardLayout from "../../components/dashboard-layout";

const DashboardHome = () => {
	return (
		<>
			<Head>
				<title>Home | Minefly Dashboard</title>
			</Head>
			<DashboardLayout>
				<div className="grid grid-cols-12 gap-4">
					<div className="col-span-6 card"><h1>hello</h1></div>
				</div>
			</DashboardLayout>
		</>
	);
};

export default DashboardHome;
