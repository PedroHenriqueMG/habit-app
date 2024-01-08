import { MyButton } from "../../ui/Button";
import { MyInput } from "../../ui/Input";
import { useLogin } from "./useLogin";

export default function LoginForm() {
  const { register, handleLogin, handleSubmit, errors } = useLogin();

  return (
    <form onSubmit={handleSubmit(handleLogin)} className="flex flex-col gap-4">
      <MyInput
        {...register("name")}
        color={`${errors.name ? "danger" : "default"}`}
        errorMessage={`${errors.name ? `${errors.name.message}` : ""}`}
      />
      <MyInput
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
