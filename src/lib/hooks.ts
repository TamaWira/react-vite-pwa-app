import { useContext } from "react";
import { ExpenseContext } from "../contexts/ExpenseContextProvider";

export const useExpenseContext = () => {
  const context = useContext(ExpenseContext);

  if (!context) {
    throw new Error(
      "useSearchContext must be used within a SearchContextProvider"
    );
  }

  return context;
};
