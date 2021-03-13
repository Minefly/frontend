import { useState, useEffect } from "react";
import Card from "../components/card";

const Home = () => {
	const nOfImages = 3;

	const [currentImg, setCurrentImg] = useState(1);

	const [isMoving, setIsMoving] = useState(false);

	useEffect(() => {
		const interval = setInterval(() => {
			setIsMoving(true);
			if (currentImg < nOfImages) setCurrentImg(currentImg + 1);
			else setCurrentImg(1);
			setTimeout(() => {
				setIsMoving(false);
			}, 700);
		}, 10000);

		return () => clearInterval(interval);
	});

	return (
		<>
			<div className="banner w-full relative h-6/5">
				<div className="banner-img-container">
					<div
						className={`banner-img img-1 ${currentImg === 1 ? "active" : ""} ${
							currentImg === 2 && isMoving ? "exiting" : ""
						}`}
					/>
					<div
						className={`banner-img img-2 ${currentImg === 2 ? "active" : ""} ${
							currentImg === 3 && isMoving ? "exiting" : ""
						}`}
					/>
					<div
						className={`banner-img img-3 ${currentImg === 3 ? "active" : ""} ${
							currentImg === 1 && isMoving ? "exiting" : ""
						}`}
					/>
				</div>
				<div className="text-white font-extrabold max-w-none absolute z-10 top-2/5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-11/12">
					<h1 className="text-4xl sm:text-5xl xl:text-7xl my-4 text-primary-50">
						Free, community-first
						<br />
						Minecraft server hosting
					</h1>
					<button className="mt-4 btn btn-big btn-outlined-hover w-max">
						Get started
					</button>
				</div>
			</div>
			<div className="h-32 w-6/5 min-w-200 bg-white dark:bg-gray-800 rounded-1/2 relative bottom-16 left-1/2 transform -translate-x-1/2" />
			<main className="relative bottom-28">
				<div className="container md:w-auto md:px-0 md:max-w-none md:flex md:mx-4">
					<Card
						title="Completely Free"
						className="my-8 md:flex-1 md:mx-4 md:my-0 text-center"
						centered
					>
						All users have access to a free Minecraft server, no credit card or
						payment required.
					</Card>
					<Card
						title="Community First"
						className="my-8 md:relative md:bottom-4 md:flex-1 md:mx-4 md:my-0 text-center"
						centered
					>
						We value our community and strive to make our services the best they
						can be for our users. We take user input seriously and consider all
						your feedback.
					</Card>
					<Card
						title="Quality Service"
						className="my-8 md:flex-1 md:mx-4 md:my-0 text-center"
						centered
					>
						Our servers are equipped with powerful processors and fast SSDs. We
						also have a support team you can talk to in real-time if you're
						having issues.
					</Card>
				</div>
			</main>
		</>
	);
};

export default Home;
