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

  function handleCriation(data: habitsSchemaProps) {
    habit.mutate(data);
    router.push("/");
  }

  return {
    register,
    handleSubmit,
    handleCriation,
    errors,
  };
};
