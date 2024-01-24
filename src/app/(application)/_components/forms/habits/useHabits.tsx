import { useForm } from "react-hook-form";
import { habitsSchema, type habitsSchemaProps } from "~/types/habitsSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { api } from "~/trpc/react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

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
  const session = useSession();

  function handleCriation(data: habitsSchemaProps) {
    habit.mutate({ user_id: session.data?.user.id, habit: data.habit });
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
