import { RxHamburgerMenu } from "react-icons/rx";

export default function MobileMenuButton() {
  return (
    <button className="flex justify-center items-center">
      <RxHamburgerMenu className="w-5 h-5 font-semibold text-white" />
    </button>
  );
}
