import { useState, useEffect } from "react";

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
			<div className="banner h-screen w-full relative">
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
				<div className="text-white font-extrabold max-w-none absolute z-10 top-2/5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-11/12 flex justify-center flex-col-reverse sm:flex-row">
					<div className="flex-1 sm:flex-grow-2 flex flex-col justify-center">
						<h1 className="text-4xl sm:text-5xl xl:text-7xl my-4 text-primary-50">
							Free, high quality
							<br />
							Minecraft server hosting
						</h1>
						<button className="mt-4 btn btn-big btn-outlined-hover w-max">
							Get started
						</button>
					</div>
					<div className="flex-1 w-1/4 sm:w-max">
						<img
							className="object-contain"
							src="./mineflyrocket.png"
							alt="The Minefly Logo"
						/>
					</div>
				</div>
			</div>
			<img src="./wave.svg" className="absolute bottom-0" alt="" />
			<div className="h-60 bg-violet-700"></div>
		</>
	);
};

export default Home;
