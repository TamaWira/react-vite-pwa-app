import { useState, ChangeEvent, FocusEvent } from "react";
import { useExpenseContext } from "../lib/hooks";

type Form = {
  amount: string | number;
};

type Props = {
  setIsOpen: (state: boolean) => void;
};

export default function AddExpenseForm({ setIsOpen }: Props) {
  // We keep the amount as a string so we can store both the unformatted (editing) and formatted values.
  const { expenses, handleChangeExpenses } = useExpenseContext();
  const [form, setForm] = useState<Form>({
    amount: "",
  });

  // Remove all non-digit characters.
  const unformatNumber = (value: string): string => {
    return value.replace(/\D/g, "");
  };

  // Format the number using a locale that uses dots for thousand separators (e.g., "de-DE").
  // You can change "de-DE" to another locale if needed.
  const formatNumber = (value: string): string => {
    const numericValue = Number(unformatNumber(value));
    if (!value || isNaN(numericValue)) return "";
    return numericValue.toLocaleString("de-DE");
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    // As the user types, update the state.
    setForm({ ...form, amount: parseInt(e.target.value) });
  };

  const handleFocus = (e: FocusEvent<HTMLInputElement>) => {
    // On focus, remove formatting so the user can edit the raw number.
    // setAmount(unformatNumber(e.target.value));
    setForm({ ...form, amount: unformatNumber(e.target.value) });
  };

  const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
    // On blur, format the number with thousand separators.
    // setAmount(formatNumber(e.target.value));
    console.log(formatNumber(e.target.value));
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
        <div className="flex justify-center items-center gap-1 py-10 border">
          <label htmlFor="amount">Rp</label>
          <input
            type="text"
            id="amount"
            value={form.amount}
            placeholder="0"
            className="border focus:outline-none w-fit placeholder:text-white text-3xl appearance-none field-sizing-content"
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
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
