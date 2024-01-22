"use client";

import Image from "next/image";
import DayState from "./dayState";
import { MyButton } from "./ui/Button";
import { type State } from "@prisma/client";
import { api } from "~/trpc/react";
import { useRouter } from "next/navigation";
import Link from "next/link";

type Props = {
  habits: {
    id: number;
    habit: string;
    state: State[];
  }[];
};
export default function TableHabit({ habits }: Props) {
  const habitDelete = api.habits.delete.useMutation();
  const router = useRouter();

  const today = new Date();
  const todayWeekDay = today.getDay();
  const weekDays = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"];

  const last7days = weekDays
    .map((_, index) => {
      const date = new Date();
      date.setDate(date.getDate() - index);

      return date.toISOString().slice(0, 10);
    })
    .reverse();

  const sortWeekDay = weekDays
    .slice(todayWeekDay + 1)
    .concat(weekDays.slice(0, todayWeekDay + 1));

  function handleDelete(id: number) {
    habitDelete.mutate({ id });
    setTimeout(() => {
      router.refresh();
      clearTimeout(id);
    }, 2);
  }
  console.log(last7days);

  function getStatusDay(state: State[], date: string | undefined) {
    const matchinStatus = state.find((state) => state.date === date);
    if (matchinStatus) {
      return matchinStatus.status;
    }
    return undefined;
  }

  return (
    <div className="flex flex-col items-center gap-8">
      {habits.length > 0 ? (
        habits.map((habitSteak) => (
          <div key={habitSteak.id}>
            <div className="flex items-center justify-between">
              <span className="font-sans text-xl text-white">
                {habitSteak.habit}
              </span>
              <MyButton onClick={() => handleDelete(habitSteak.id)}>
                <Image src="/trash.svg" width={20} height={20} alt="lixeira" />
              </MyButton>
            </div>
            <Link href={`/habit/${habitSteak.id}`}>
              <div className="grid grid-cols-7 rounded-md bg-neutral-800 p-2">
                {sortWeekDay.map((day, index) => (
                  <div key={day} className="flex flex-col last:font-bold">
                    <span className="text-center font-display text-white">
                      {day}
                    </span>
                    <DayState
                      day={getStatusDay(habitSteak.state, last7days[index])}
                    />
                  </div>
                ))}
              </div>
            </Link>
          </div>
        ))
      ) : (
        <h1 className="mt-20 font-display text-2xl text-white">
          Voce não tem habitos cadastrados
        </h1>
      )}
      <MyButton color="green" onClick={() => router.push("/newhabit")}>
        novo hábito
      </MyButton>
    </div>
  );
}
