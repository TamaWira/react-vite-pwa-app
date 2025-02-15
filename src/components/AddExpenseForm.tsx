import { useState, ChangeEvent, FocusEvent, useEffect, useRef } from "react";
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

  // Refs for the input and hidden measuring span
  const inputRef = useRef<HTMLInputElement>(null);
  const spanRef = useRef<HTMLSpanElement>(null);

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
    // If empty, set to empty string; otherwise, parse the value
    setForm({ ...form, amount: value === "" ? "" : parseInt(value) });
  };

  const handleFocus = (e: FocusEvent<HTMLInputElement>) => {
    // On focus, remove formatting so the user can edit the raw number.
    setForm({ ...form, amount: unformatNumber(e.target.value) });
  };

  const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
    // On blur, format the number with thousand separators.
    setForm({ ...form, amount: formatNumber(e.target.value) });
  };

  // Update the input width based on the content of the hidden span.
  useEffect(() => {
    if (inputRef.current && spanRef.current) {
      const spanWidth = spanRef.current.offsetWidth;
      // Add a small extra space (2px) so the caret isn’t cut off.
      inputRef.current.style.width = `${spanWidth + 2}px`;
    }
  }, [form.amount]);

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
          <input
            ref={inputRef}
            type="text"
            id="amount"
            value={form.amount}
            placeholder="0"
            inputMode="numeric"
            pattern="[0-9]*"
            className="inline-block focus:outline-none placeholder:text-white text-3xl appearance-none"
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          {/* Hidden span to measure text width. It uses the same styling as the input. */}
          <span
            ref={spanRef}
            className="invisible absolute text-3xl whitespace-pre"
          >
            {form.amount === "" || form.amount === 0 ? "0" : form.amount}
          </span>
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
