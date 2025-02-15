import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import AppRoutes from "./components/AppRoutes.tsx";
import "./styles/global.css";
import ExpenseContextProvider from "./contexts/ExpenseContextProvider";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ExpenseContextProvider>
        <AppRoutes />
      </ExpenseContextProvider>
    </BrowserRouter>
  </StrictMode>
);
