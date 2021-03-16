//@ts-ignore
import Discord from "../public/discord.svg";

//@ts-ignore
import Twitter from "../public/twitter.svg";

const Footer = (props) => {
	return (
		<footer
			{...props}
			className={"bg-gray-100 dark:bg-gray-850 w-full py-8 " + props.className}
		>
			<div className="h-full">
				<div className="container flex justify-center">
					<a
						href="https://discord.minefly.org/"
						target="_blank"
						className="relative w-16 h-16 rounded-full bg-gray-300 dark:bg-gray-900 hover:bg-gray-400 dark:hover:bg-black focus:bg-gray-400 dark:focus:bg-black transition-colors focus:ring ring-gray-400 dark:ring-black ring-offset-2 ring-offset-gray-100 dark:ring-offset-gray-850 mx-4"
					>
						<Discord className="w-10 h-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 fill-current" />
					</a>
					<a
						href="https://twitter.com/MineflyHost"
						target="_blank"
						className="relative w-16 h-16 rounded-full bg-gray-300 dark:bg-gray-900 hover:bg-gray-400 dark:hover:bg-black focus:bg-gray-400 dark:focus:bg-black transition-colors focus:ring ring-gray-400 dark:ring-black ring-offset-2 ring-offset-gray-100 dark:ring-offset-gray-850 mx-4"
					>
						<Twitter className="w-10 h-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 fill-current" />
					</a>
				</div>
				<div className="divider my-8" />
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
