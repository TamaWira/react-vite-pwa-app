import { PiPlus } from "react-icons/pi";
import { useLocation } from "react-router";
import { Drawer } from "vaul";

export default function AddExpenseDrawer() {
  const { pathname } = useLocation();

  return (
    <Drawer.Root shouldScaleBackground>
      <Drawer.Trigger className="right-0 bottom-7 left-0 absolute flex justify-center items-center bg-[#364935] mx-auto rounded-full w-16 h-16">
        <PiPlus
          className={` p-3 border rounded-full w-14 h-14 ${
            pathname === "/add"
              ? "bg-white text-[#364935]"
              : "bg-[#364935] text-white"
          }`}
        />
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/40" />
        <Drawer.Content className="right-0 bottom-0 left-0 fixed bg-[#2E302E] rounded-t-4xl outline-none h-[97%] text-white">
          <Drawer.Title />
          <Drawer.Description />
          <div className="p-7 font-semibold text-2xl">
            <h2>Add Expense</h2>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
