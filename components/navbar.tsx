import { FC } from "react";
import Link from "next/link";
import Logo from "../public/minefly-rocket.svg";
export interface NavbarProps {
  className?: string;
  nopadding?: boolean;
}

const Navbar: FC<NavbarProps> = (props) => {
  const nopadding = props.nopadding == true;
  // TODO

  return (
    <>
      <nav
        className={`fixed left-0 top-0 right-0 transition-all h-14 text-gray-200 z-50 ${
          nopadding || "mx-8"
        } ${props.className || ""}`}
      >
        <div className="flex h-full select-none items-center gap-12">
          {props.children || (
            <>
              <Link href="/">
                <a className="flex items-center h-full">
                  <Logo className="fill-current h-8 w-8 mr-2" />
                  <h1 className="text-xl font-bold">Minefly</h1>
                </a>
              </Link>
              <Link href="/dashboard">
                <a className="flex items-center h-full">
                  <h1 className="text-xl font-bold">Dashboard</h1>
                </a>
              </Link>
            </>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
