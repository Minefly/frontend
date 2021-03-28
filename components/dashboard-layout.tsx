import NavBar from "./navbar";

//@ts-ignore
import Logo from "../public/minefly-rocket.svg";
import { useRouter } from "next/router";
import { useState } from "react";
import Sidebar from "./sidebar";

const DashboardLayout = (props) => {
	const router = useRouter();

	const [sidebarOpen, setSidebarOpen] = useState(false);
	const [hidden, setHidden] = useState(true);

	const toggleSidebarOpen = () => {
		if (sidebarOpen)
			setTimeout(() => {
				setHidden(true);
			}, 150);
		else setHidden(false);
		setTimeout(() => setSidebarOpen(!sidebarOpen), 0);
	};

	return (
		<>
			<NavBar
				className="left-auto w-full md:w-full-14"
				sidebarOpen={[sidebarOpen, setSidebarOpen]}
				hidden={[hidden, setHidden]}
			/>
			<div className="flex">
				<div className="hidden md:block w-80" />
				<Sidebar
					visible
					sidebarOpen={[sidebarOpen, setSidebarOpen]}
					hidden={[hidden, setHidden]}
				>
					{props.sidebar}
				</Sidebar>
				<div {...props} className={"flex-1 " + (props.className || "")} />
			</div>
		</>
	);
};

export default DashboardLayout;
