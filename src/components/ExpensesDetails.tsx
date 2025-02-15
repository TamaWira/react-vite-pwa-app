import {
  aggregateExpenses,
  generateRandomExpenses,
  formatToRupiah,
} from "../lib/functions";

export default function ExpensesDetails() {
  const expenses = generateRandomExpenses();
  const aggregatedExpenses = aggregateExpenses(expenses);

  return (
    <section>
      <ul className="space-y-8">
        {aggregatedExpenses.map((aggregatedExpense) => (
          <li key={aggregatedExpense.date}>
            <div className="flex justify-between items-end">
              <h3 className="text-[15px]">{aggregatedExpense.date}</h3>
              <div className="flex-1 border-white/10 border-b border-dashed" />
              <p className="text-[15px]">
                {formatToRupiah(aggregatedExpense.total)}
              </p>
            </div>
            <ul className="space-y-3 mt-3">
              {aggregatedExpense.expenses.map((expense) => (
                <li
                  key={expense.id}
                  className="flex justify-between items-center"
                >
                  <div className="flex items-center gap-3">
                    <div className="bg-[#364935] rounded-full w-8 h-8" />
                    <div>
                      <p>{expense.description}</p>
                      <p>{expense.category}</p>
                    </div>
                  </div>
                  <p>{formatToRupiah(expense.amount)}</p>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  );
}
