import { Input } from "@nextui-org/react";
import { MyButton } from "../../ui/Button";
import { useSignUp } from "./useSignUp";

export default function SignUpForm() {
  const { register, handleSubmit, handleCreation, errors } = useSignUp();

  return (
    <form
      onSubmit={handleSubmit(handleCreation)}
      className="flex flex-col gap-4"
    >
      <Input
        {...register("name")}
        color={`${errors.name ? "danger" : "default"}`}
        errorMessage={`${errors.name ? `${errors.name.message}` : ""}`}
      />
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
