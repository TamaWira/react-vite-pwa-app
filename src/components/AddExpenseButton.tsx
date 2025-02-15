import { PiPlus } from "react-icons/pi";
import { Link, useLocation } from "react-router";

export default function AddExpenseButton() {
  const { pathname } = useLocation();

  return (
    <Link
      to="/add"
      className="right-0 bottom-7 left-0 absolute flex justify-center items-center bg-[#364935] mx-auto rounded-full w-16 h-16"
    >
      <PiPlus
        className={` p-3 border rounded-full w-14 h-14 ${
          pathname === "/add"
            ? "bg-white text-[#364935]"
            : "bg-[#364935] text-white"
        }`}
      />
    </Link>
  );
}
