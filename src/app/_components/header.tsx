"use client";

import Image from "next/image";
import { MyButton } from "./ui/Button";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();

  return (
    <section className="flex justify-between px-4 py-2">
      <div>
        <Image src="/logo.svg" width={200} height={200} alt="logo projeto" />
      </div>
      <div className="flex gap-2">
        <MyButton onClick={() => router.push("/?signup=true")} color="neutral">
          Cadastro
        </MyButton>
        <MyButton
          onClick={() => router.push("/?login=true")}
          color="green"
          radius="sm"
        >
          Entrar
        </MyButton>
      </div>
    </section>
  );
}
