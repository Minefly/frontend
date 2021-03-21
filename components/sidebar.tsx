import { useState } from "react";

const Sidebar = (props) => {
    let {
        sidebarOpen: sidebarOpenState,
        hidden: hiddenState,
        anchor = "left",
        visible = false,
        nooffset = false,
        children,
        ...componentProps
    } = props;

    const [hidden, setHidden] = hiddenState || useState(true);
    const [sidebarOpen, setSidebarOpen] = sidebarOpenState || useState(false);

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
                {children}
            </div>
        </>
    );
};

export default Sidebar;
