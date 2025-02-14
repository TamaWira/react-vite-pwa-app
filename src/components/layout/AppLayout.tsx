import { Outlet } from "react-router";
import AddExpenseButton from "../AddExpenseButton";
import Header from "./Header";

export default function AppLayout() {
  return (
    <>
      <div className="relative bg-[#2E302E] min-h-screen text-white text-xs">
        <Header />
        <div className="p-5">
          <Outlet />
        </div>
        <AddExpenseButton />
      </div>
    </>
  );
}
