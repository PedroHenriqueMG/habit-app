import { MyButton } from "../../ui/Button";
import { MyInput } from "../../ui/Input";

export default function LoginForm() {
  return (
    <form className="flex flex-col gap-4">
      <MyInput />
      <MyInput />
      <MyButton color="green">Enviar</MyButton>
    </form>
  );
}
