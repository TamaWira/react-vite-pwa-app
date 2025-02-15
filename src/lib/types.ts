export type Expense = {
  id: number;
  userId: number;
  amount: number;
  description: string;
  category: string;
  date: string;
  createdAt: string;
  updatedAt: string | null;
};

export type AggregatedExpense = {
  date: string;
  total: number;
  expenses: Expense[];
};
