import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link, useLocation } from "react-router";
import { Drawer } from "vaul";
import { menus } from "../lib/constants";

export default function MobileNavigationMenu() {
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Drawer.Root direction="right" open={isOpen} onOpenChange={setIsOpen}>
      <Drawer.Trigger className="focus:outline-none">
        <RxHamburgerMenu className="w-5 h-5 font-semibold text-white" />
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/40" />
        <Drawer.Content className="top-2 right-2 bottom-2 z-10 fixed flex outline-none w-[250px]">
          <div className="flex flex-col gap-3 bg-zinc-50 p-5 rounded-[16px] w-full h-full grow">
            <Drawer.Title className="text-xl">
              Expense <span className="font-semibold">Tracker</span>
            </Drawer.Title>
            <Drawer.Description />
            <ul className="space-y-3 py-3 border-b">
              {menus.map(({ label, path }) => (
                <li key={path}>
                  <Link
                    to={path}
                    onClick={() => setIsOpen(false)}
                    className={`block focus:bg-[#2E302E] px-2 py-1 rounded-md w-full focus:text-white ${
                      pathname === path ? "bg-[#2E302E] text-white" : ""
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
