import Head from "next/head";
import DashboardLayout from "../../components/dashboard-layout";

const DashboardHome = () => {
	return (
		<>
			<Head>
				<title>Home | Minefly Dashboard</title>
			</Head>
			<DashboardLayout />
		</>
	);
};

export default DashboardHome;
