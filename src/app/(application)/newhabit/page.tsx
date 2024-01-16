"use client";

import { Input } from "@nextui-org/react";
import { MyButton } from "../_components/ui/Button";
import { useHabits } from "../_components/forms/habits/useHabits";
import { useRouter } from "next/navigation";

export default function NewHabit() {
  const router = useRouter();
  const { register, handleSubmit, handleCriation, errors } = useHabits();

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

        <MyButton type="submit" color="green" className="text-lg">
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
