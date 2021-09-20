import { FC } from "react";
import Link from "next/link";
import Logo from "../public/minefly-rocket.svg";
export interface NavbarProps {
  className?: string;
}
const Navbar: FC<NavbarProps> = (props) => {
  return (
    <>
      <nav
        className={`flex select-none h-full items-center flex-wrap transition-all text-gray-200 ${
          props.className || ""
        }`}
      >
        {props.children || (
          <>
            <Link href="/">
              <a className="flex items-center h-full">
                <Logo className="fill-current h-8 w-8 mr-2" />
                <h1 className="text-xl font-bold">Minefly</h1>
              </a>
            </Link>
            <div className="flex-1"></div>
            <Link href="/dashboard">
              <a className="flex items-center h-full">
                <h1 className="text-xl font-bold btn btn-outlined">
                  Dashboard
                </h1>
              </a>
            </Link>
          </>
        )}
      </nav>
    </>
  );
};

export default Navbar;
