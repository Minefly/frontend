import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import { Dispatch, FC, SetStateAction, useEffect, useState } from "react";

//@ts-ignore
import Logo from "../public/minefly-rocket.svg";
import { useAuthStore } from "../store/auth";
import Sidebar from "./sidebar";

export interface NavBarProps {
    contained?: boolean;
    nopadding?: boolean;
    sidebarOpen?: [boolean, Dispatch<SetStateAction<boolean>>];
    hidden?: [boolean, Dispatch<SetStateAction<boolean>>];
    className?: string;
}

const NavBar: FC<NavBarProps> = (props) => {
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
    const [sidebarOpen, setSidebarOpen] =
        sidebarOpenState || useState<boolean>(false);
    const [hidden, setHidden] = hiddenState || useState<boolean>(true);

    const toggleSidebarOpen = () => {
        if (sidebarOpen)
            setTimeout(() => {
                setHidden(true);
            }, 150);
        else setHidden(false);
        setTimeout(() => setSidebarOpen(!sidebarOpen), 0);
    };

    const isLoggedIn = useAuthStore((state) => state.loggedIn);

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
                        ? "bg-gray-100 dark:bg-gray-850 text-black dark:text-gray-200 "
                        : "text-gray-200 ") +
                    componentProps.className
                }
            >
                <div
                    className={
                        "h-full flex items-center select-none " +
                        (contained ? "container" : "mx-8")
                    }
                >
                    {children || (
                        <>
                            <Link href="/">
                                <a className="flex items-center h-full">
                                    <Logo className="fill-current h-6 w-6 mr-2" />
                                    <h1 className="text-xl font-bold">
                                        Minefly
                                    </h1>
                                </a>
                            </Link>
                            <div className="flex-1" />
                            {isLoggedIn ? (
                                <Link href="/dashboard">
                                    <a className="btn btn-outlined btn--accent">
                                        Dashboard
                                    </a>
                                </Link>
                            ) : (
                                <>
                                    <Link href="/login">
                                        <a
                                            className={
                                                "hidden md:block btn btn-outlined mr-2 " +
                                                (opaque && "btn--accent")
                                            }
                                        >
                                            Login
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
                                        aria-label="Menu"
                                        className="ml-4 focus:outline-none md:hidden"
                                        onClick={toggleSidebarOpen}
                                    >
                                        <div className="bg-white w-5 h-0.5 my-1.5 rounded-full" />
                                        <div className="bg-white w-5 h-0.5 my-1.5 rounded-full" />
                                        <div className="bg-white w-5 h-0.5 my-1.5 rounded-full" />
                                    </button>
                                </>
                            )}
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
