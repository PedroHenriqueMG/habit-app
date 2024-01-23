import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  stateFormSchema,
  type stateFormSchemaProps,
} from "~/types/habitsSchema";

export const useState = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<stateFormSchemaProps>({
    mode: "onBlur",
    criteriaMode: "all",
    resolver: zodResolver(stateFormSchema),
  });

  return {
    register,
    handleSubmit,
    errors,
  };
};
