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
    const res = await signIn("credentials", {
      name: userdata.name,
      password: userdata.password,
      callbackUrl: "/",
    });

    console.log(res);
  }

  return {
    register,
    handleSubmit,
    handleLogin,
    errors,
  };
};
