import { PiPlus } from "react-icons/pi";

export default function AddExpenseButton() {
  return (
    <button className="right-5 bottom-5 absolute flex justify-center items-center bg-white rounded-full w-10 h-10">
      <PiPlus className="text-[#2E302E] text-2xl" />
    </button>
  );
}
