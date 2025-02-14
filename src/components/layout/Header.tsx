import { RxHamburgerMenu } from "react-icons/rx";

export default function Header() {
  return (
    <header className="flex justify-between items-center mx-auto px-5 py-6 border-white/10 border-b">
      <h2 className="text-xl">
        Hi, <span className="font-semibold">User</span>!
      </h2>
      <button>
        <RxHamburgerMenu className="w-5 h-5 font-semibold text-white" />
      </button>
    </header>
  );
}
