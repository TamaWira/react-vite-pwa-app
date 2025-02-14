import ExpensesSummary from "../ExpensesSummary";

export default function HomePage() {
  return (
    <main className="space-y-5">
      <div className="flex justify-between bg-[#364935] px-8 py-6 rounded-md text-center">
        <ExpensesSummary />
      </div>
    </main>
  );
}
