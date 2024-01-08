import { MyButton } from "../../ui/Button";
import { MyInput } from "../../ui/Input";
import { useSignUp } from "./useSignUp";

export default function SignUpForm() {
  const { register, handleSubmit, handleCreation, errors } = useSignUp();

  return (
    <form
      onSubmit={handleSubmit(handleCreation)}
      className="flex flex-col gap-4"
    >
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
