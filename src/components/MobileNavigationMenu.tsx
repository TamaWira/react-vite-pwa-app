import { useState } from "react";
import { Link } from "react-router";
import { Drawer } from "vaul";
import { menus } from "../lib/constants";
import MobileMenuButton from "./MobileMenuButton";

export default function MobileNavigationMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Drawer.Root direction="right" open={isOpen} onOpenChange={setIsOpen}>
      <Drawer.Trigger>
        <MobileMenuButton />
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/40" />
        <Drawer.Content className="top-2 right-2 bottom-2 z-10 fixed flex outline-none w-[250px]">
          <div className="flex flex-col gap-3 bg-zinc-50 p-5 rounded-[16px] w-full h-full grow">
            <Drawer.Title className="mb-2 border-zinc-700 border-b font-medium text-zinc-900">
              Expense Tracker
            </Drawer.Title>
            <ul>
              {menus.map(({ label, path }) => (
                <li>
                  <Link to={path} onClick={() => setIsOpen(false)}>
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
