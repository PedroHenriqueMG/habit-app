import { Input } from "@nextui-org/react";
import { MyButton } from "../_components/ui/Button";

export default function NewHabit() {
  async function newHabit(formData: FormData) {
    "use server";

    const habit = formData.get("habit");

    console.log(habit);
  }

  return (
    <section className="relative flex flex-col items-center gap-8 pt-16">
      <h1 className="text-center font-display text-4xl text-white">
        novo hábito
      </h1>

      <form action={newHabit} className="mt-4 flex flex-col gap-4">
        <Input type="text" name="habit" radius="sm" size="sm" />

        <MyButton type="submit" color="green" className="text-lg">
          Cadastrar
        </MyButton>

        <MyButton color="black" className="text-lg">
          Cancelar
        </MyButton>
      </form>
    </section>
  );
}
