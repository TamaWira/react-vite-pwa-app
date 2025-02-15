import ExpensesDetails from "../ExpensesDetails";
import ExpensesSummary from "../ExpensesSummary";

export default function HomePage() {
  return (
    <main className="space-y-10 mb-20">
      <div className="flex justify-between bg-[#364935] px-8 py-6 rounded-md text-center">
        <ExpensesSummary />
      </div>
      <ExpensesDetails />
    </main>
  );
}
