import { useState } from "react";
import { useExpenseContext } from "../../lib/hooks";
import { AmountInput } from "./AmountInput";
import { CategoryInput } from "./CategoryInput";
import DescriptionInput from "./DescriptionInput";
import { ExpenseDatePicker } from "./ExpenseDatePicker";
import { SubmitButton } from "./SubmitButton";

export type Form = {
  category: string;
  description: string;
  amount: string | number;
  date: Date;
};

type Props = {
  setIsOpen: (state: boolean) => void;
};

export default function AddExpenseForm({ setIsOpen }: Props) {
  const { expenses, handleChangeExpenses } = useExpenseContext();
  const [form, setForm] = useState<Form>({
    amount: "",
    category: "",
    description: "",
    date: new Date(),
  });

  // Remove all non-digit characters.
  const unformatNumber = (value: string): string => value.replace(/\D/g, "");

  // Generate expense variable from submitted form
  const generateExpense = (form: Form) => {
    return {
      id: new Date().getTime(),
      userId: 1,
      amount: Number(unformatNumber(form.amount.toString())),
      description: form.description,
      category: form.category,
      date: form.date.toISOString().split("T")[0],
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
        <AmountInput form={form} setForm={setForm} />
        <div className="items-center gap-y-3 grid grid-cols-3 text-sm">
          <DescriptionInput form={form} setForm={setForm} />
          <CategoryInput form={form} setForm={setForm} />
          <ExpenseDatePicker form={form} setForm={setForm} />
        </div>
        <div className="flex flex-1 items-end py-7">
          <SubmitButton />
        </div>
      </form>
    </div>
  );
}
