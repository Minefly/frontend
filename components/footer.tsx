const Footer = () => {
	return (
		<footer className="bg-gray-100 dark:bg-gray-850 w-full py-8 mt-12">
			<div className="h-full">
				<div className="container flex justify-center">
					<a
						href="https://discord.minefly.org/"
						target="_blank"
						className="relative w-16 h-16 rounded-full bg-gray-300 dark:bg-gray-900 hover:bg-black focus:bg-black transition-colors focus:ring ring-black ring-offset-2 ring-offset-gray-850 mx-4"
					>
						<img
							src="./discord-white.svg"
							className="w-10 h-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
						/>
					</a>
					<a
						href="https://twitter.com/MineflyHost"
						target="_blank"
						className="relative w-16 h-16 rounded-full bg-gray-300 dark:bg-gray-900 hover:bg-black focus:bg-black transition-colors focus:ring ring-black ring-offset-2 ring-offset-gray-850 mx-4"
					>
						<img
							src="./twitter-white.svg"
							className="w-10 h-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
						/>
					</a>
				</div>
				<div className="border border-gray-300 dark:border-gray-700 my-8" />
				<div className="container text-center">
					<h2>
						&#169; Minefly 2021. <br />
						All rights reserved.
					</h2>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
