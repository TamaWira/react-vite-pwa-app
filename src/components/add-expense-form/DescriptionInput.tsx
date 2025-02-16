import { Form } from "./AddExpenseForm";

type Props = {
  form: Form;
  setForm: (state: Form) => void;
};

export default function DescriptionInput({ form, setForm }: Props) {
  return (
    <>
      <label htmlFor="description" className="col-start-1">
        Description
      </label>
      <input
        id="description"
        type="text"
        value={form.description}
        onChange={(e) => setForm({ ...form, description: e.target.value })}
        required
        placeholder="Ayam Geprek"
        className="col-span-2 col-start-2 p-2 border rounded-md w-full"
      />
    </>
  );
}
