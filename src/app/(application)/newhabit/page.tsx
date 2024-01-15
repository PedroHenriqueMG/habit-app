"use client";

import { Input } from "@nextui-org/react";
import { MyButton } from "../_components/ui/Button";
import { useHabits } from "../_components/forms/habits/useHabits";
import { useRouter } from "next/navigation";
import { api } from "~/trpc/react";

export default function NewHabit() {
  const router = useRouter();
  const create = api.habits.create.useMutation();
  const { register, handleSubmit, handleCriation, errors } = useHabits();

  const weekDays = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"];

  const last7days = weekDays.map((_, index) => {
    const date = new Date();
    date.setDate(date.getDate() - index);

    return {
      status: null,
      date: date,
    };
  });

  function handleClick() {
    create.mutate({
      habit: "teste2",
      state: last7days,
    });
  }

  return (
    <section className="relative flex flex-col items-center gap-8 pt-16">
      <h1 className="text-center font-display text-4xl text-white">
        novo hábito
      </h1>

      <form
        onSubmit={handleSubmit(handleCriation)}
        className="mt-4 flex flex-col gap-4"
      >
        <Input
          type="text"
          {...register("habit")}
          color={`${errors.habit ? "danger" : "default"}`}
          errorMessage={`${errors.habit ? `${errors.habit.message}` : ""}`}
          radius="sm"
          size="sm"
        />

        <MyButton
          onClick={() => handleClick()}
          color="green"
          className="text-lg"
        >
          Cadastrar
        </MyButton>

        <MyButton
          onClick={() => router.push("/")}
          color="black"
          className="text-lg"
        >
          Cancelar
        </MyButton>
      </form>
    </section>
  );
}
