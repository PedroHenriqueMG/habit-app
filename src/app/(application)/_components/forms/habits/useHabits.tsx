import { useForm } from "react-hook-form";
import { habitsSchema, type habitsSchemaProps } from "~/types/habitsSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { api } from "~/trpc/react";
import { useRouter } from "next/navigation";

export const useHabits = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<habitsSchemaProps>({
    mode: "onBlur",
    criteriaMode: "all",
    resolver: zodResolver(habitsSchema),
  });

  const habit = api.habits.create.useMutation();
  const router = useRouter();
  const weekDays = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"];

  const last7days = weekDays.map((_, index) => {
    const date = new Date();
    date.setDate(date.getDate() - index);

    return {
      status: null,
      date: date,
    };
  });

  function handleCriation(data: habitsSchemaProps) {
    habit.mutate({
      habit: data,
      state: [last7days],
    });
    router.push("/");
    setTimeout(() => {
      router.refresh();
      clearTimeout(+data);
    }, 2);
  }

  return {
    register,
    handleSubmit,
    handleCriation,
    errors,
  };
};
