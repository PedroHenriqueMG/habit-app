"use client";

import Image from "next/image";
import { MyButton } from "./ui/Button";
import { useRouter } from "next/navigation";
import { type Session } from "next-auth";
import { signOut } from "next-auth/react";

type props = {
  session: Session | null;
};

export default function Header({ session }: props) {
  const router = useRouter();

  return (
    <section className="flex justify-between px-4 py-2">
      <div>
        <Image src="/logo.svg" width={200} height={200} alt="logo projeto" />
      </div>
      {session ? (
        <div className="flex gap-2">
          <p>{session.user.name}</p>
          <MyButton onClick={() => signOut()} color="green">
            Sair
          </MyButton>
        </div>
      ) : (
        <div className="flex gap-2">
          <MyButton
            onClick={() => router.push("/?signup=true")}
            color="neutral"
          >
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
      )}
    </section>
  );
}
