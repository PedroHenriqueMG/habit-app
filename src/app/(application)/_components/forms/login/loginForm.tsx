import { Input } from "@nextui-org/react";
import { MyButton } from "../../ui/Button";
import { useLogin } from "./useLogin";

export default function LoginForm() {
  const { register, handleLogin, handleSubmit, errors } = useLogin();

  return (
    <form onSubmit={handleSubmit(handleLogin)} className="flex flex-col gap-4">
      <Input
        {...register("email")}
        color={`${errors.email ? "danger" : "default"}`}
        errorMessage={`${errors.email ? `${errors.email.message}` : ""}`}
      />
      <Input
        {...register("password")}
        color={`${errors.password ? "danger" : "default"}`}
        errorMessage={`${errors.password ? `${errors.password.message}` : ""}`}
      />
      <MyButton type="submit" color="green">
        Enviar
      </MyButton>
    </form>
  );
}
