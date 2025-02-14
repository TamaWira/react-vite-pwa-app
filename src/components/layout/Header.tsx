import Logo from "../Logo";
import MobileNavigationMenu from "../MobileNavigationMenu";

export default function Header() {
  return (
    <header className="flex justify-between items-center mx-auto px-5 py-6 border-white/10 border-b">
      <Logo />
      <MobileNavigationMenu />
    </header>
  );
}
