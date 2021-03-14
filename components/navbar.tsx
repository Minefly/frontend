import { useEffect, useState } from "react";

//@ts-ignore
import Logo from "../public/minefly-rocket.svg";

const NavBar = () => {
	const [scrollTop, setScrollTop] = useState(0);

	useEffect(() => {
		const listener = () => setScrollTop(window.pageYOffset);

		window.addEventListener("scroll", listener);

		return () => window.removeEventListener("scroll", listener);
	}, []);

	return (
		<div
			className={
				"fixed z-20 top-0 left-0 right-0 transition-all h-14 " +
				(scrollTop > 20
					? "shadow-xl bg-gray-100 dark:bg-gray-800 text-black dark:text-white"
					: "text-white")
			}
		>
			<div className="container h-full flex justify items-center">
				<Logo className="fill-current h-6 w-6 mr-2" />
				<h1 className="text-xl font-bold">Minefly</h1>
				<div className="flex-1" />
				<button
					className={
						"btn btn-outlined mr-2 " + (scrollTop > 20 && "btn--accent")
					}
				>
					Sign In
				</button>
				<button
					className={"btn ml-2 btn-filled " + (scrollTop > 20 && "btn--accent")}
				>
					Sign Up
				</button>
			</div>
		</div>
	);
};

export default NavBar;
