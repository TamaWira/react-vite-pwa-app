import { useState } from "react";
import { useExpenseContext } from "../lib/hooks";
import AddExpenseFormAmount from "./AddExpenseFormAmount";
import AddExpenseFormSubmitButton from "./AddExpenseFormSubmitButton";

export type Form = {
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

  // Generate expense variable from submitted form
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

  // Form submit event handler
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleChangeExpenses([...expenses, generateExpense(form)]);
    setIsOpen(false);
  };

  return (
    <div className="flex-1 p-7 text-white">
      <h2 className="font-semibold text-lg text-center">New Expense</h2>
      <form onSubmit={onSubmit} className="flex flex-col h-full">
        <AddExpenseFormAmount form={form} setForm={setForm} />
        <div>
          <label htmlFor="category">Category</label>
        </div>
        <div className="flex flex-1 items-end py-7">
          <AddExpenseFormSubmitButton />
        </div>
      </form>
    </div>
  );
}
