import {
  aggregateExpenses,
  generateRandomExpenses,
  formatToRupiah,
} from "../lib/functions";
import { AggregatedExpense, Expense } from "../lib/types";
import { formatDate } from "../lib/functions";

export default function ExpensesDetails() {
  const expenses = generateRandomExpenses();
  const aggregatedExpenses = aggregateExpenses(expenses);

  return (
    <section>
      <ul className="space-y-8">
        {aggregatedExpenses.map((aggregatedExpense) => (
          <ExpenseDetailHeader
            key={aggregatedExpense.date}
            aggregatedExpense={aggregatedExpense}
          >
            <ul className="space-y-3 mt-3">
              {aggregatedExpense.expenses.map((expense) => (
                <ExpenseDetailRow key={expense.id} expense={expense} />
              ))}
            </ul>
          </ExpenseDetailHeader>
        ))}
      </ul>
    </section>
  );
}

type ExpenseDetailHeaderProps = {
  children: React.ReactNode;
  aggregatedExpense: AggregatedExpense;
};

function ExpenseDetailHeader({
  children,
  aggregatedExpense,
}: ExpenseDetailHeaderProps) {
  return (
    <li>
      <div className="flex justify-between items-end font-semibold">
        <h3 className="text-[15px]">{formatDate(aggregatedExpense.date)}</h3>
        <div className="flex-1 mx-1 border-white/10 border-b border-dashed" />
        <p className="text-[15px]">{formatToRupiah(aggregatedExpense.total)}</p>
      </div>
      {children}
    </li>
  );
}

type ExpenseDetailRowProps = {
  expense: Expense;
};

function ExpenseDetailRow({ expense }: ExpenseDetailRowProps) {
  return (
    <li key={expense.id} className="flex justify-between items-center">
      <div className="flex items-center gap-3">
        <div className="bg-[#364935] rounded-full w-8 h-8" />
        <div>
          <p>{expense.description}</p>
          <p className="text-white/60">{expense.category}</p>
        </div>
      </div>
      <p>{formatToRupiah(expense.amount)}</p>
    </li>
  );
}
