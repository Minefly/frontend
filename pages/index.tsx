const Home = () => {
	return (
		<>
			<div className="banner h-5/6 w-full relative">
				<div className="banner-img" />
				<div className="text-white font-extrabold max-w-none absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-11/12 text-center">
					<h1 className="text-3xl sm:text-5xl xl:text-7xl mt-4 text-primary-50">
						Free, high quality
					</h1>
					<h1 className="text-3xl sm:text-5xl xl:text-7xl mb-4 text-primary-50">
						Minecraft server hosting
					</h1>
					<button className="mt-4 btn btn-big btn-filled btn--primary">
						Get started
					</button>
				</div>
			</div>
		</>
	);
};

export default Home;
