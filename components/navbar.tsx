import { useTheme } from "next-themes";
import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";


//@ts-ignore
import Logo from "../public/minefly-rocket.svg";
import Sidebar from "./sidebar";

export interface NavBarProps {
	contained?: boolean;
	nopadding?: boolean;
	[key: string]: any;
}

const NavBar = (props: NavBarProps) => {
	const {
		contained,
		nopadding,
		sidebarOpen: sidebarOpenState,
		hidden: hiddenState,
		children,
		...componentProps
	} = props;

	const router = useRouter();

	const [opaque, setOpaque] = useState(true);
	const [sidebarOpen, setSidebarOpen] = sidebarOpenState || useState(false);
	const [hidden, setHidden] = hiddenState || useState(true);

	const toggleSidebarOpen = () => {
		if (sidebarOpen)
			setTimeout(() => {
				setHidden(true);
			}, 150);
		else setHidden(false);
		setTimeout(() => setSidebarOpen(!sidebarOpen), 0);
	};

	const { theme, setTheme } = useTheme();

	const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

	if (router.asPath === "/")
		useEffect(() => {
			const scrollListener = () => setOpaque(window.pageYOffset > 20);
			scrollListener();

			const screenListener = () => {
				if (window.matchMedia("(min-width: 768px)").matches) {
					setHidden(true);
					setSidebarOpen(false);
				}
			};
			screenListener();

			window.addEventListener("scroll", scrollListener);
			window.addEventListener("resize", screenListener);

			return () => {
				window.removeEventListener("scroll", scrollListener);
				window.removeEventListener("resize", screenListener);
			};
		}, []);

	return (
		<>
			{nopadding || <div className="h-14" />}
			<div
				{...componentProps}
				className={
					"fixed z-40 left-0 top-0 right-0 transition-all h-14 " +
					(opaque || sidebarOpen
						? "bg-gray-100 dark:bg-gray-850 text-black dark:text-white "
						: "text-white ") +
					componentProps.className
				}
			>
				<div
					className={
						"h-full flex items-center select-none " + (contained ? "container" : "mx-8")
					}
				>
					{children || (
						<>
							<Link href="/">
								<a className="flex items-center h-full">
									<Logo className="fill-current h-6 w-6 mr-2" />
									<h1 className="text-xl font-bold">Minefly</h1>
								</a>
							</Link>
							<div className="flex-1" />
							<button
								className={
									"hidden md:block btn mr-2 btn-filled " +
									(opaque && "btn--accent")
								}
								onClick={toggleTheme}
							>
								Switch Theme
							</button>
							<Link href="/signin">
								<a
									className={
										"hidden md:block btn btn-outlined mx-2 " +
										(opaque && "btn--accent")
									}
								>
									Sign In
								</a>
							</Link>
							<Link href="/signup">
								<a
									className={
										"hidden md:block btn ml-2 btn-filled " +
										(opaque && "btn--accent")
									}
								>
									Sign Up
								</a>
							</Link>
							<button
								className="ml-4 focus:outline-none md:hidden"
								onClick={toggleSidebarOpen}
							>
								<div className="bg-white w-5 h-0.5 my-1.5 rounded-full" />
								<div className="bg-white w-5 h-0.5 my-1.5 rounded-full" />
								<div className="bg-white w-5 h-0.5 my-1.5 rounded-full" />
							</button>
						</>
					)}
				</div>
			</div>
			{!props.hidden && !props.sidebarOpen && (
				<Sidebar
					anchor="right"
					hidden={[hidden, setHidden]}
					sidebarOpen={[sidebarOpen, setSidebarOpen]}
				/>
			)}
		</>
	);
};

export default NavBar;
