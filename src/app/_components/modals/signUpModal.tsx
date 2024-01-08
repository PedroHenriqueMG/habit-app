"use client";

import {
  Modal,
  ModalContent,
  ModalBody,
  ModalHeader,
  ModalFooter,
} from "@nextui-org/react";
import { useRouter, useSearchParams } from "next/navigation";
import SignUpForm from "../forms/signup/signUpForm";

export default function SignUpModal() {
  const searchParams = useSearchParams();
  const open = searchParams.get("signup") === "true";
  const router = useRouter();
  const close = () => router.push("/");

  return (
    <Modal isOpen={open} onClose={close}>
      <ModalContent>
        <ModalHeader></ModalHeader>
        <ModalBody>
          <div className="flex w-full flex-col items-center justify-center gap-6">
            <p className="text-white">Cadastro</p>
            <SignUpForm />
          </div>
        </ModalBody>
        <ModalFooter></ModalFooter>
      </ModalContent>
    </Modal>
  );
}
