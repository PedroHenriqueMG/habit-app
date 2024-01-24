import { Input } from "@nextui-org/react";
import { Select, SelectItem } from "@nextui-org/react";
import { MyButton } from "../../ui/Button";
import { useState } from "./useState";
import { type stateFormSchemaProps } from "~/types/habitsSchema";
import { api } from "~/trpc/react";
import { useRouter } from "next/navigation";

export default function StateForm({ id }: { id: number }) {
  const { register, handleSubmit, errors } = useState();
  const stateUpdate = api.habits.update.useMutation();
  const router = useRouter();

  function handleUpdate(data: stateFormSchemaProps) {
    if (data.status === "true") {
      stateUpdate.mutate({ habits_id: +id, date: data.date, status: true });
      router.push(`/habit/${id}`);
      setTimeout(() => {
        router.refresh();
        clearTimeout(id);
      }, 2);
    } else {
      stateUpdate.mutate({ habits_id: +id, date: data.date, status: false });
      router.push(`/habit/${id}`);
      setTimeout(() => {
        router.refresh();
        clearTimeout(id);
      }, 2);
    }
  }

  return (
    <form
      onSubmit={handleSubmit(handleUpdate)}
      className="flex flex-col gap-4 font-sans"
    >
      <Input
        {...register("date")}
        color={`${errors.date ? "danger" : "default"}`}
        errorMessage={`${errors.date ? `${errors.date.message}` : ""}`}
        type="date"
        placeholder="DD/MM/AAAA"
      />
      <Select
        {...register("status")}
        color={`${errors.status ? "danger" : "default"}`}
        errorMessage={`${errors.status ? `${errors.status.message}` : ""}`}
        label="Status do Hábito"
      >
        <SelectItem className="font-sans" key="true">
          Feito
        </SelectItem>
        <SelectItem className="font-sans" key="false">
          Não feito
        </SelectItem>
      </Select>
      <MyButton type="submit" color="green">
        Enviar
      </MyButton>
    </form>
  );
}
