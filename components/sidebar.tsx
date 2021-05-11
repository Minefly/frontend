import { useRouter } from "next/router";
import { Dispatch, FC, SetStateAction, useState } from "react";
import Link from "next/link";
import { useAuthStore } from "../store/auth";
import {
    AdjustmentsIcon,
    DesktopComputerIcon,
    HomeIcon,
    IdentificationIcon,
    LoginIcon,
    ShoppingBagIcon,
} from "@heroicons/react/outline";

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
                    "fixed z-50 bottom-0 bg-gray-100 dark:bg-gray-850 w-80 max-w-full rounded-bl-md transition-transform p-8 dark:text-gray-200 " +
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
                                            <HomeIcon className="h-6 w-auto mr-2" />
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
                                            <LoginIcon className="h-6 w-auto mr-2" />
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
                                            <IdentificationIcon className="h-6 w-auto mr-2" />
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
                                            <DesktopComputerIcon className="h-6 w-auto mr-2" />
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
                                            <ShoppingBagIcon className="h-6 w-auto mr-2" />
                                            Shop
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/dashboard/profile">
                                        <a
                                            className={
                                                "rounded-lg hover:underline flex w-full my-2 px-4 py-3 text-left select-none" +
                                                (router.asPath ===
                                                    "/dashboard/profile" &&
                                                    "bg-gray-200 dark:bg-gray-800")
                                            }
                                        >
                                            <AdjustmentsIcon />
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
