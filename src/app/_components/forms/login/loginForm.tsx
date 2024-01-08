import { MyButton } from "../../ui/Button";
import { MyInput } from "../../ui/Input";

export default function LoginForm() {
  return (
    <form>
      <MyInput />
      <MyInput />
      <MyButton>Enviar</MyButton>
    </form>
  );
}
