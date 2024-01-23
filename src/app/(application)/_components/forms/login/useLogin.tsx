import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import { useForm } from "react-hook-form";
import { loginSchema, type loginSchemaProps } from "~/types/loginSchema";

export const useLogin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<loginSchemaProps>({
    mode: "onBlur",
    criteriaMode: "all",
    resolver: zodResolver(loginSchema),
  });

  async function handleLogin(userdata: loginSchemaProps) {
    await signIn("credentials", {
      email: userdata.email,
      password: userdata.password,
      callbackUrl: "/",
    });
  }

  return {
    register,
    handleSubmit,
    handleLogin,
    errors,
  };
};
