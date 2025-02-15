import { ChangeEvent, FocusEvent, useState } from "react";
import AutosizeInput from "react-input-autosize";
import { useExpenseContext } from "../lib/hooks";

type Form = {
  amount: string | number;
};

type Props = {
  setIsOpen: (state: boolean) => void;
};

export default function AddExpenseForm({ setIsOpen }: Props) {
  const { expenses, handleChangeExpenses } = useExpenseContext();
  const [form, setForm] = useState<Form>({ amount: "" });

  // Remove all non-digit characters.
  const unformatNumber = (value: string): string => value.replace(/\D/g, "");

  // Format the number with thousand separators (e.g., "de-DE").
  const formatNumber = (value: string): string => {
    const numericValue = Number(unformatNumber(value));
    if (!value || isNaN(numericValue)) return "";
    return numericValue.toLocaleString("de-DE");
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setForm({ ...form, amount: value === "" ? "" : parseInt(value) });
  };

  const handleFocus = (e: FocusEvent<HTMLInputElement>) => {
    // Remove formatting on focus so the user sees the raw number.
    setForm({ ...form, amount: unformatNumber(e.target.value) });
  };

  const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
    // Format the number on blur.
    setForm({ ...form, amount: formatNumber(e.target.value) });
  };

  const generateExpense = (form: Form) => {
    return {
      id: new Date().getTime(),
      userId: 1,
      amount: Number(unformatNumber(form.amount.toString())),
      description: "Testing",
      category: "Testing",
      date: new Date().toISOString().split("T")[0],
      createdAt: new Date().toISOString().split("T")[0],
      updatedAt: null,
    };
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleChangeExpenses([...expenses, generateExpense(form)]);
    setIsOpen(false);
  };

  return (
    <div className="flex-1 p-7 text-white">
      <h2 className="font-semibold text-lg text-center">New Expense</h2>
      <form onSubmit={onSubmit} className="flex flex-col h-full">
        <div className="relative flex justify-center items-center gap-1 py-10">
          <label htmlFor="amount" className="text-3xl">
            Rp
          </label>
          <AutosizeInput
            required
            placeholder="0"
            type="text"
            inputMode="numeric"
            value={form.amount}
            className="inline-block focus:outline-none placeholder:text-white text-3xl appearance-none"
            onChange={handleChange}
            onBlur={handleBlur}
            onFocus={handleFocus}
          />
        </div>
        <div className="flex flex-1 items-end py-7">
          <button
            type="submit"
            className="bg-white py-3 rounded-full w-full text-black"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
