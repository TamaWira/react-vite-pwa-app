import DatePicker from "react-datepicker";
import { Form } from "./AddExpenseForm";
import "react-datepicker/dist/react-datepicker.css";

type Props = {
  form: Form;
  setForm: (state: Form) => void;
};

function ExpenseDatePicker({ form, setForm }: Props) {
  return (
    <>
      <label htmlFor="date" className="col-start-1">
        Date
      </label>
      <DatePicker
        required
        selected={form.date}
        onChange={(date) => date && setForm({ ...form, date })}
        className="col-span-2 col-start-2 p-2 border rounded-md outline-none w-full"
      />
    </>
  );
}

export { ExpenseDatePicker };
