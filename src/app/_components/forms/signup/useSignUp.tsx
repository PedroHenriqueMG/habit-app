import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { type signUpSchemaProps, signUpschema } from "./schema";
import { api } from "~/trpc/react";
import { useRouter } from "next/navigation";

export const useSignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<signUpSchemaProps>({
    mode: "onBlur",
    criteriaMode: "all",
    resolver: zodResolver(signUpschema),
  });
  const signupCreate = api.signUp.create.useMutation();
  const router = useRouter();

  function handleCreation(userdata: signUpSchemaProps) {
    signupCreate.mutate(userdata);
    router.push("/");
  }

  return {
    register,
    handleSubmit,
    handleCreation,
    errors,
  };
};
