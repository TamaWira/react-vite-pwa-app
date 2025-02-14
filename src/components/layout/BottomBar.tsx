import { IoMdHome } from "react-icons/io";
import { IoMdSettings } from "react-icons/io";
import { MdAccountCircle } from "react-icons/md";
import { PiPlus } from "react-icons/pi";
import { FaInfoCircle } from "react-icons/fa";
import { Link, useLocation } from "react-router";

export default function BottomBar() {
  return (
    <footer className="right-0 bottom-0 left-0 absolute flex justify-evenly items-center gap-10 bg-[#364935] py-3 rounded-t-4xl text-white text-xl">
      <div className="flex justify-center items-center gap-12 w-full">
        <Menu path="/">
          <IoMdHome />
        </Menu>
        <Menu path="/about">
          <FaInfoCircle />
        </Menu>
      </div>
      <div className="flex justify-center items-center gap-12 w-full">
        <Menu path="/signup">
          <IoMdSettings />
        </Menu>
        <Menu path="/login">
          <MdAccountCircle />
        </Menu>
      </div>

      <button className="right-0 bottom-1 left-0 absolute flex justify-center items-center bg-[#364935] mx-auto rounded-full w-16 h-16">
        <PiPlus className="bg-[#364935] p-3 border rounded-full w-14 h-14 text-white" />
      </button>
    </footer>
  );
}

type MenuProps = {
  children: React.ReactNode;
  path: string;
};

function Menu({ path, children }: MenuProps) {
  const { pathname } = useLocation();

  return (
    <Link
      to={path}
      className={`text-[#2E302E] ${pathname === path ? "text-white" : ""}`}
    >
      {children}
    </Link>
  );
}
