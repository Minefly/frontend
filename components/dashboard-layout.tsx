import NavBar from "./navbar";

//@ts-ignore
import Logo from "../public/minefly-rocket.svg";
import { useRouter } from "next/router";

const DashboardLayout = (props) => {
	const router = useRouter();

	return (
		<>
			<NavBar
				className="left-auto"
				style={{
					width: "calc(100% - 20rem)",
				}}
			>
				<></>
			</NavBar>
			<div className="flex">
				<div className="w-80 h-full">
					<div className="fixed top-0 left-0 w-80 h-screen bg-gray-850 px-8">
						<a
							href="/"
							className="h-14 flex items-center justify-center w-min mx-auto"
						>
							<Logo className="fill-current h-6 w-6 mr-2" />
							<h1 className="text-xl font-bold">Minefly</h1>
						</a>
						<div className="divider" />
						<div className="py-4">
							<ul>
								<li>
									<a
										href="/dashboard/home"
										className={
											"rounded-lg hover:underline flex w-full my-2 px-4 py-3 text-left " +
											(router.asPath === "/dashboard/home" &&
												"bg-gray-100 dark:bg-gray-800")
										}
									>
										<svg
											className="h-6 w-auto mr-2"
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
											/>
										</svg>
										Home
									</a>
								</li>
								<li>
									<a
										href="/dashboard/console"
										className={
											"rounded-lg hover:underline w-full my-2 px-4 py-3 text-left flex items-center" +
											(router.asPath === "/dashboard/console" &&
												"bg-gray-100 dark:bg-gray-800")
										}
									>
										<svg
											className="h-6 w-auto mr-2"
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
											/>
										</svg>
										Console
									</a>
								</li>
								<li>
									<a
										href="/dashboard/settings"
										className={
											"rounded-lg hover:underline flex w-full my-2 px-4 py-3 text-left" +
											(router.asPath === "/dashboard/settings" &&
												"bg-gray-100 dark:bg-gray-800")
										}
									>
										<svg
											className="h-6 w-auto mr-2"
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
											/>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
											/>
										</svg>
										Settings
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div {...props} className={"flex-1 " + props.className} />
			</div>
		</>
	);
};

export default DashboardLayout;
