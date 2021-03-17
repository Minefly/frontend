import Footer from "../components/footer";
import NavBar from "../components/navbar";

const Rules = () => {
	return (
		<>
			<title>
				Rules | Minefly
			</title>
			<NavBar />
			<div class="banner w-full relative h-50" style="background-image: url(https://images.indianexpress.com/2020/05/Minecraft-1200-1.jpg)"> <!-- need img to replace this with later -->
				<div className="text-center lg:text-left text-white font-extrabold absolute z-10 top-2/5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 container">
					<h1 className="text-2xl sm:text-4xl xl:text-7xl my-4 text-primary-50">
						Rules
					</h1>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Rules;
