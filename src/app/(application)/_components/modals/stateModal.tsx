"use client";

import {
  Modal,
  ModalContent,
  ModalBody,
  ModalHeader,
  ModalFooter,
} from "@nextui-org/react";
import { useRouter, useSearchParams } from "next/navigation";

export default function StateModal({ path }: { path: number }) {
  const searchParams = useSearchParams();
  const open = searchParams.get("state") === "true";
  const router = useRouter();
  const close = () => router.push(`/habit/${path}`);

  return (
    <Modal isOpen={open} onClose={close}>
      <ModalContent>
        <ModalHeader></ModalHeader>
        <ModalBody className="flex flex-col items-center justify-center">
          <p className="text-white">Entrar</p>
        </ModalBody>
        <ModalFooter></ModalFooter>
      </ModalContent>
    </Modal>
  );
}
