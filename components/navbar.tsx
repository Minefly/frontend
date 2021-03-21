import { useRouter } from "next/dist/client/router";
import { useEffect, useState } from "react";

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
                        "h-full flex items-center " +
                        (contained ? "container" : "mx-8")
                    }
                >
                    {children || (
                        <>
                            <a href="/" className="flex items-center h-full">
                                <Logo className="fill-current h-6 w-6 mr-2" />
                                <h1 className="text-xl font-bold">Minefly</h1>
                            </a>
                            <div className="flex-1" />
                            <a
                                href="/signin"
                                className={
                                    "hidden md:block btn btn-outlined mr-2 " +
                                    (opaque && "btn--accent")
                                }
                            >
                                Sign In
                            </a>
                            <a
                                href="/signup"
                                className={
                                    "hidden md:block btn ml-2 btn-filled " +
                                    (opaque && "btn--accent")
                                }
                            >
                                Sign Up
                            </a>
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
                >
                    <ul>
                        <li>
                            <a
                                href="/"
                                className={
                                    "rounded-lg hover:underline block w-full py-2 px-4 text-left " +
                                    (router.asPath === "/" &&
                                        "bg-gray-100 dark:bg-gray-800")
                                }
                            >
                                Home
                            </a>
                        </li>
                        <li>
                            <a
                                href="/signin"
                                className={
                                    "rounded-lg hover:underline block w-full py-2 px-4 text-left" +
                                    (router.asPath === "/signin" &&
                                        "bg-gray-100 dark:bg-gray-800")
                                }
                            >
                                Sign In
                            </a>
                        </li>
                        <li>
                            <a
                                href="/signup"
                                className={
                                    "rounded-lg hover:underline block w-full py-2 px-4 text-left" +
                                    (router.asPath === "/signup" &&
                                        "bg-gray-100 dark:bg-gray-800")
                                }
                            >
                                Sign Up
                            </a>
                        </li>
                    </ul>
                </Sidebar>
            )}
        </>
    );
};

export default NavBar;
