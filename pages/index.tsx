const Home = () => {
	return <>
		<div className="banner h-5/6 w-full relative">
			<div className="banner-img" />
			<div className="text-white font-extrabold max-w-none absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/5 text-center">
				<h1 className="text-7xl my-4">
					Free, community-first Minecraft server hosting
				</h1>
				<button className="mt-4 btn btn-med btn-filled bg-indigo-500">
					Get Started
				</button>
			</div>
		</div>
	</>;
}

export default Home;
