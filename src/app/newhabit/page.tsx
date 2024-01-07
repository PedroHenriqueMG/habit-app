import { MyButton } from "../_components/ui/Button";
import { MyInput } from "../_components/ui/Input";

export default function NewHabit() {
  async function newHabit(formData: FormData) {
    "use server";

    const habit = formData.get("habit");

    console.log(habit);
  }

  return (
    <main className="container relative flex flex-col gap-8 pt-16">
      <h1 className="font-display text-center text-4xl text-white">
        novo hábito
      </h1>

      <form action={newHabit} className="mt-4 flex flex-col gap-4">
        <MyInput type="text" name="habit" radius="sm" size="sm" />

        <MyButton type="submit" color="green" className="text-lg">
          Cadastrar
        </MyButton>

        <MyButton className="text-lg">Cancelar</MyButton>
      </form>
    </main>
  );
}
