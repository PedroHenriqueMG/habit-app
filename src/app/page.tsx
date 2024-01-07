"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { MyButton } from "./_components/ui/Button";
import DayState from "./_components/dayState";

export default function Home() {
  const route = useRouter();

  const habits = {
    "beber agua": {
      "2023-11-07": true,
      "2023-11-08": false,
      "2023-11-09": true,
    },
    estudar: {
      "2023-11-07": false,
      "2023-11-08": true,
      "2023-11-09": true,
    },
  };

  const today = new Date();
  const todayWeekDay = today.getDay();
  const weekDays = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"];

  const sortWeekDay = weekDays
    .slice(todayWeekDay + 1)
    .concat(weekDays.slice(0, todayWeekDay + 1));

  return (
    <main className="container relative flex flex-col gap-8 px-4 pt-16">
      {Object.keys(habits).length === 0 && (
        <h1 className=" font-display mt-20 text-2xl text-white">
          Voce não tem habitos cadastrados
        </h1>
      )}
      {habits != null &&
        Object.entries(habits).map(([habits, habitSteak]) => (
          <div key={habits}>
            <div className="flex items-center justify-between">
              <span className="font-sans text-xl text-white">{habits}</span>
              <MyButton>
                <Image src="/trash.svg" width={20} height={20} alt="lixeira" />
              </MyButton>
            </div>
            <div className="grid grid-cols-7 rounded-md bg-neutral-800 p-2">
              {sortWeekDay.map((day) => (
                <div key={day} className="flex flex-col last:font-bold">
                  <span className="font-display text-center text-white">
                    {day}
                  </span>
                  <DayState day={true} />
                </div>
              ))}
            </div>
          </div>
        ))}
      <MyButton
        color="green"
        radius="sm"
        onClick={() => route.push("/newhabit")}
        className="text-lg"
      >
        novo hábito
      </MyButton>
    </main>
  );
}
