import NavBar from "./navbar";

//@ts-ignore
import Logo from "../public/minefly-rocket.svg";
import { useRouter } from "next/router";
import { FC, useState } from "react";
import Sidebar from "./sidebar";

interface LayoutProps {
    sidebar?: JSX.Element;
    className?: string;
}

const DashboardLayout: FC<LayoutProps> = (props) => {
    const router = useRouter();

    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [hidden, setHidden] = useState(true);

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
                <div
                    {...props}
                    className={"flex-1 " + (props.className || "")}
                />
            </div>
        </>
    );
};

export default DashboardLayout;
