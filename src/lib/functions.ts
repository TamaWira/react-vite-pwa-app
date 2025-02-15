import { descriptions, categories } from "./constants";
import { AggregatedExpense, Expense } from "./types";

export function formatToRupiah(amount: number): string {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0, // Rupiah typically does not use decimals
  }).format(amount);
}

export function formatDate(dateString: string): string {
  const dateParts = dateString.split("-");
  if (dateParts.length !== 3) {
    throw new Error("Invalid date format. Expected format: YYYY-MM-DD");
  }

  const [year, month, day] = dateParts;
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const monthIndex = parseInt(month, 10) - 1;
  const monthName = monthNames[monthIndex];

  return `${parseInt(day, 10)} ${monthName} ${year}`;
}

export const generateRandomExpenses = () => {
  const expenses: Expense[] = [];
  let id = 1;

  // Define a start date (adjust as needed)
  const startDate = new Date("2025-02-06");

  // Generate expenses for 10 consecutive days
  for (let day = 0; day < 10; day++) {
    const currentDate = new Date(startDate);
    currentDate.setDate(startDate.getDate() + day);
    const dateString = currentDate.toISOString().split("T")[0]; // Format as YYYY-MM-DD

    // Each day will have between 2 and 5 expenses
    const expenseCount = randomInt(2, 5);

    for (let i = 0; i < expenseCount; i++) {
      const createdAt = `${dateString} ${randomTime()}+00`;

      const expense: Expense = {
        id: id++,
        userId: 1,
        amount: randomInt(5000, 50000), // random amount between 5,000 and 50,000
        description: descriptions[randomInt(0, descriptions.length - 1)],
        category: categories[randomInt(0, categories.length - 1)],
        date: dateString,
        createdAt,
        updatedAt: null,
      };

      expenses.push(expense);
    }
  }

  return expenses;
};

export const aggregateExpenses = (expenses: Expense[]) => {
  const aggregatedExpenses: AggregatedExpense[] = Object.values(
    expenses.reduce<Record<string, AggregatedExpense>>((acc, expense) => {
      // If the date hasn't been seen before, create a new entry
      if (!acc[expense.date]) {
        acc[expense.date] = {
          date: expense.date,
          total: 0,
          expenses: [],
        };
      }
      // Add the current expense to the corresponding date
      acc[expense.date].expenses.push(expense);
      // Update the total for that date
      acc[expense.date].total += expense.amount;
      return acc;
    }, {})
  );

  // Sort the aggregated expenses from newest to oldest based on the date.
  aggregatedExpenses.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return aggregatedExpenses;
};

function randomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Helper function to generate a random time string in HH:mm:ss format
function randomTime(): string {
  const hour = randomInt(0, 23).toString().padStart(2, "0");
  const minute = randomInt(0, 59).toString().padStart(2, "0");
  const second = randomInt(0, 59).toString().padStart(2, "0");
  return `${hour}:${minute}:${second}`;
}
