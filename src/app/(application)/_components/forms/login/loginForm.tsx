import { Input } from "@nextui-org/react";
import { MyButton } from "../../ui/Button";
import { useLogin } from "./useLogin";
import { useState } from "react";
import Image from "next/image";

export default function LoginForm() {
  const { register, handleLogin, handleSubmit, errors } = useLogin();
  const [show, setShow] = useState(true);

  return (
    <form
      onSubmit={handleSubmit(handleLogin)}
      className="flex flex-col gap-4 font-sans"
    >
      <Input
        label="Email"
        {...register("email")}
        color={`${errors.email ? "danger" : "default"}`}
        errorMessage={`${errors.email ? `${errors.email.message}` : ""}`}
      />
      <Input
        label="Senha"
        endContent={
          <button
            className="focus:outline-none"
            type="button"
            onClick={() => setShow(!show)}
          >
            {show ? (
              <Image
                className="pointer-events-none text-2xl text-white"
                src="/eye.svg"
                width={35}
                height={35}
                alt="eye"
              />
            ) : (
              <Image
                className="pointer-events-none text-2xl text-white"
                src="/eyeOff.svg"
                width={35}
                height={35}
                alt="eyeoff"
              />
            )}
          </button>
        }
        type={show ? "password" : "text"}
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
