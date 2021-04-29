import { useRouter } from "next/router";
import { Dispatch, FC, SetStateAction, useState } from "react";
import Link from "next/link";
import { useAuthStore } from "../store/auth";
import { HomeIcon } from "@heroicons/react/outline"

interface SidebarProps {
    sidebarOpen?: [boolean, Dispatch<SetStateAction<boolean>>];
    hidden?: [boolean, Dispatch<SetStateAction<boolean>>];
    anchor?: "right" | "left";
    visible?: boolean;
    nooffset?: boolean;
    className?: string;
}

type SidebarComponent = FC<SidebarProps>;

const Sidebar: SidebarComponent = (props) => {
    let {
        sidebarOpen: sidebarOpenState,
        hidden: hiddenState,
        anchor = "left",
        visible = false,
        nooffset = false,
        children,
        ...componentProps
    } = props;

    const router = useRouter();

    const loggedIn = useAuthStore((store) => store.loggedIn);

    const [hidden, setHidden] = hiddenState || useState<boolean>(true);
    const [sidebarOpen, setSidebarOpen] =
        sidebarOpenState || useState<boolean>(false);

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
            <div
                className={
                    "fixed z-30 inset-0 bg-black bg-opacity-40 transition-opacity md:hidden " +
                    (!sidebarOpen && "opacity-0 ") +
                    (hidden && !sidebarOpen && "hidden ")
                }
                onClick={toggleSidebarOpen}
            />
            <div
                {...componentProps}
                className={
                    "fixed z-50 bottom-0 bg-gray-100 dark:bg-gray-850 w-80 max-w-full rounded-bl-md transition-transform p-8 dark:text-white " +
                    (nooffset ? "top-0" : "top-14") +
                    " " +
                    ((anchor === "right" && "right-0") ||
                        (anchor === "left" && "left-0")) +
                    " " +
                    (!sidebarOpen &&
                        (anchor === "right"
                            ? "transform translate-x-full"
                            : anchor === "left" &&
                              "transform -translate-x-full")) +
                    " " +
                    (!visible && "md:hidden") +
                    " " +
                    (hidden &&
                        !sidebarOpen &&
                        (visible ? "hidden md:block" : "hidden")) +
                    " " +
                    (visible && "md:top-0 md:transform-none") +
                    " " +
                    (componentProps.className || "")
                }
            >
                {children || (
                    <>
                        {!loggedIn ? (
                            <ul>
                                <li>
                                    <Link href="/">
                                        <a
                                            className={
                                                "rounded-lg hover:underline flex w-full my-2 px-4 py-3 text-left select-none" +
                                                (router.asPath === "/" &&
                                                    "bg-gray-100 dark:bg-gray-800")
                                            }
                                        >
                                            <HomeIcon /> 
                                            Home
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/login">
                                        <a
                                            className={
                                                "rounded-lg hover:underline flex w-full my-2 px-4 py-3 text-left select-none" +
                                                (router.asPath === "/login" &&
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
                                                    d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                                                />
                                            </svg>
                                            Login
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/signup">
                                        <a
                                            className={
                                                "rounded-lg hover:underline flex w-full my-2 px-4 py-3 text-left select-none" +
                                                (router.asPath === "/signup" &&
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
                                                    d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
                                                />
                                            </svg>
                                            Sign Up
                                        </a>
                                    </Link>
                                </li>
                            </ul>
                        ) : (
                            <ul>
                                <li>
                                    <Link href="/dashboard/home">
                                        <a
                                            className={
                                                "rounded-lg hover:underline flex w-full my-2 px-4 py-3 text-left select-none" +
                                                (router.asPath ===
                                                    "/dashboard/home" &&
                                                    "bg-gray-200 dark:bg-gray-800")
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
                                                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                                />
                                            </svg>
                                            Dashboard
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/shop">
                                        <a
                                            className={
                                                "rounded-lg hover:underline w-full my-2 px-4 py-3 text-left flex items-center select-none" +
                                                (router.asPath === "/shop" &&
                                                    "bg-gray-200 dark:bg-gray-800")
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
                                                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                                                />
                                            </svg>
                                            Shop
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/account/settings">
                                        <a
                                            className={
                                                "rounded-lg hover:underline flex w-full my-2 px-4 py-3 text-left select-none" +
                                                (router.asPath ===
                                                    "/account/settings" &&
                                                    "bg-gray-200 dark:bg-gray-800")
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
                                            Account Settings
                                        </a>
                                    </Link>
                                </li>
                            </ul>
                        )}
                    </>
                )}
            </div>
        </>
    );
};

export default Sidebar;
