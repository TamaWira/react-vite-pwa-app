import { useState } from "react";

export default function AddExpenseForm() {
  const [form, setForm] = useState({
    amount: 0,
  });

  return (
    <div className="p-7 text-white">
      <h2 className="font-semibold text-lg text-center">New Expense</h2>
      <form>
        <div className="flex justify-center items-center">
          <label htmlFor="amount">Rp</label>
          <input
            type="text"
            // value={form.amount}
            className="focus:outline-none w-fit appearance-none"
            // onChange={(e) =>
            //   setForm({
            //     ...form,
            //     amount: e.target.value ? parseInt(e.target.value) : 0,
            //   })
            // }
          />
        </div>
      </form>
    </div>
  );
}
