import { Outlet } from "react-router";
import { PiPlus } from "react-icons/pi";
import Header from "./Header";

export default function AppLayout() {
  return (
    <>
      <div className="relative bg-[#2E302E] min-h-screen text-white text-xs">
        <Header />
        <div className="p-5">
          <Outlet />
        </div>
        <button className="right-5 bottom-5 absolute flex justify-center items-center bg-white rounded-full w-8 h-8">
          <PiPlus className="text-[#2E302E]" />
        </button>
      </div>
    </>
  );
}
