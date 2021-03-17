import Footer from "../components/footer";
import NavBar from "../components/navbar";

const Rules = () => {
	return (
		<>
			<title>
				Rules | Minefly
			</title>
			<NavBar />
			<div class="py-20 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
				<div class="container mx-auto content-center">
					<h1 class="text-4xl font-bold center text-white">
						Rules
					</h1>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Rules;
