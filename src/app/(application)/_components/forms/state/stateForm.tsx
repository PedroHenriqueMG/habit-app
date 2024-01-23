import { Input } from "@nextui-org/react";
import { RadioGroup, Radio } from "@nextui-org/react";
import { MyButton } from "../../ui/Button";
import { useState } from "./useState";
import { type stateFormSchemaProps } from "~/types/habitsSchema";
import { api } from "~/trpc/react";

export default function StateForm({ id }: { id: number }) {
  const { register, handleSubmit, errors } = useState();
  const stateUpdate = api.habits.update.useMutation();

  function handleUpdate(data: stateFormSchemaProps) {
    if (data.status === "true") {
      stateUpdate.mutate({ habits_id: +id, date: data.date, status: true });
    } else {
      stateUpdate.mutate({ habits_id: +id, date: data.date, status: false });
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
      <RadioGroup
        {...register("status")}
        color={`${errors.status ? "danger" : "default"}`}
        errorMessage={`${errors.status ? `${errors.status.message}` : ""}`}
        label="Status do Hábito"
        orientation="horizontal"
      >
        <Radio value="true">Feito</Radio>
        <Radio value="false">Não Feito</Radio>
      </RadioGroup>
      <MyButton type="submit" color="green">
        Enviar
      </MyButton>
    </form>
  );
}
