//@ts-ignore
import Discord from "../public/discord.svg";

//@ts-ignore
import Twitter from "../public/twitter.svg";
import Link from "next/link";
import { FC } from "react";

interface FooterProps {
    className?: String;
}

const Footer: FC<FooterProps> = (props) => {
    return (
        <footer
            {...props}
            className={
                "bg-gray-100 dark:bg-gray-850 w-full py-8 flex-1 " +
                props.className
            }
        >
            <div className="h-full">
                <div className="container flex justify-center">
                    <Link href="https://discord.minefly.org/">
                        <a
                            rel="noopener"
                            aria-label="Discord"
                            target="_blank"
                            className="relative w-12 h-12 rounded-full bg-gray-300 dark:bg-gray-800 hover:bg-gray-400 dark:hover:bg-gray-700 focus:bg-gray-400 dark:focus:bg-gray-700 transition-colors focus:ring ring-gray-400 dark:ring-gray-700 ring-offset-2 ring-offset-gray-100 dark:ring-offset-gray-850 mx-4"
                        >
                            <Discord className="w-8 h-8 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 fill-[#1E293B] dark:fill-[#94A3B8]" />
                        </a>
                    </Link>
                    <Link href="https://twitter.com/MineflyHost">
                        <a
                            rel="noopener"
                            aria-label="Twitter"
                            target="_blank"
                            className="relative w-12 h-12 rounded-full bg-gray-300 dark:bg-gray-800 hover:bg-gray-400 dark:hover:bg-gray-700 focus:bg-gray-400 dark:focus:bg-gray-700 transition-colors focus:ring ring-gray-400 dark:ring-gray-700 ring-offset-2 ring-offset-gray-100 dark:ring-offset-gray-850 mx-4"
                        >
                            <Twitter className="w-8 h-8 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 fill-[#1E293B] dark:fill-[#94A3B8]" />
                        </a>
                    </Link>
                </div>
                <div className="container text-center my-8">
                    <h2>
                        &#8482; Minefly 2021. <br />
                        All rights reserved.
                    </h2>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
