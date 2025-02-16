import { Form } from "./AddExpenseForm";

type Props = {
  form: Form;
  setForm: (state: Form) => void;
};

function CategoryInput({ form, setForm }: Props) {
  return (
    <>
      <label htmlFor="category" className="col-start-1">
        Category
      </label>
      <input
        id="category"
        type="text"
        value={form.category}
        onChange={(e) => setForm({ ...form, category: e.target.value })}
        required
        placeholder="Food"
        className="col-span-2 col-start-2 p-2 border rounded-md outline-none w-full"
      />
    </>
  );
}

export { CategoryInput };
