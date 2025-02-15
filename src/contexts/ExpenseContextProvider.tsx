import { createContext, useState } from "react";
import { aggregateExpenses } from "../lib/functions";
import { AggregatedExpense, Expense } from "../lib/types";

type TExpenseContext = {
  expenses: Expense[];
  aggregatedExpenses: AggregatedExpense[];
  handleChangeExpenses: (expenses: Expense[]) => void;
};

type ExpenseContextProviderProps = {
  children: React.ReactNode;
};

export const ExpenseContext = createContext<TExpenseContext | null>(null);

export default function ExpenseContextProvider({
  children,
}: ExpenseContextProviderProps) {
  const [expenses, setExpenses] = useState<Expense[]>([]);

  // Derived states
  const aggregatedExpenses = aggregateExpenses(expenses);

  // Event handlers
  const handleChangeExpenses = (newExpenses: Expense[]) => {
    setExpenses(newExpenses);
  };

  return (
    <ExpenseContext.Provider
      value={{ expenses, aggregatedExpenses, handleChangeExpenses }}
    >
      {children}
    </ExpenseContext.Provider>
  );
}
