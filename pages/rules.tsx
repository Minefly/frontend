import Head from "next/head";

import Footer from "../components/footer";
import NavBar from "../components/navbar";

const Rules = () => {
	return (
		<>
			<Head>
				<title>Rules | Minefly</title>
			</Head>
			<NavBar />
			<div className="w-full py-20 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
				<div className="container mx-auto content-center">
					<h1 className="text-4xl font-bold center text-white">Rules</h1>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Rules;
