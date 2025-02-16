import AutosizeInput from "react-input-autosize";
import { Form } from "./AddExpenseForm";

type Props = {
  form: Form;
  setForm: (state: Form) => void;
};

function AmountInput({ form, setForm }: Props) {
  // Remove all non-digit characters.
  const unformatNumber = (value: string): string => value.replace(/\D/g, "");

  // Format the number with thousand separators (e.g., "de-DE").
  const formatNumber = (value: string): string => {
    const numericValue = Number(unformatNumber(value));
    if (!value || isNaN(numericValue)) return "";
    return numericValue.toLocaleString("de-DE");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setForm({ ...form, amount: value === "" ? "" : parseInt(value) });
  };

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    // Remove formatting on focus so the user sees the raw number.
    setForm({ ...form, amount: unformatNumber(e.target.value) });
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    // Format the number on blur.
    setForm({ ...form, amount: formatNumber(e.target.value) });
  };

  return (
    <div className="relative flex justify-center items-center gap-1 py-10">
      <label htmlFor="amount" className="text-3xl">
        Rp
      </label>
      <AutosizeInput
        required
        placeholder="0"
        type="text"
        inputMode="numeric"
        value={form.amount}
        className="inline-block focus:outline-none placeholder:text-white text-3xl appearance-none"
        onChange={handleChange}
        onBlur={handleBlur}
        onFocus={handleFocus}
      />
    </div>
  );
}

export { AmountInput };
