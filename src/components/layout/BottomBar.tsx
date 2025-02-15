import { FaInfoCircle } from "react-icons/fa";
import { IoHomeSharp, IoSettingsSharp } from "react-icons/io5";
import { MdAccountCircle } from "react-icons/md";
import { Link, useLocation } from "react-router";
import AddExpenseButton from "../AddExpenseButton";

export default function BottomBar() {
  return (
    <footer className="right-0 bottom-0 left-0 absolute flex justify-evenly items-center gap-10 bg-[#364935] rounded-t-4xl text-white text-xl">
      <div className="flex justify-center items-center w-full">
        <Menu path="/">
          <IoHomeSharp />
        </Menu>
        <Menu path="/about">
          <FaInfoCircle />
        </Menu>
      </div>
      <div className="flex justify-center items-center w-full">
        <Menu path="/signup">
          <IoSettingsSharp />
        </Menu>
        <Menu path="/login">
          <MdAccountCircle />
        </Menu>
      </div>

      <AddExpenseButton />
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
      className={`text-[#2E302E] p-5 ${pathname === path ? "text-white" : ""}`}
    >
      {children}
    </Link>
  );
}
