import Image from "next/image";
import { MyButton } from "./ui/Button";

export default function Header() {
  return (
    <section className="flex justify-between px-4 py-2">
      <div>
        <Image src="/logo.svg" width={200} height={200} alt="logo projeto" />
      </div>
      <div className="flex gap-2">
        <MyButton color="neutral">Cadastro</MyButton>
        <MyButton color="green" radius="sm">
          Entrar
        </MyButton>
      </div>
    </section>
  );
}
