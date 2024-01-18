"use client";

import { type State } from "@prisma/client";
import { MyButton } from "./ui/Button";
import { useRouter } from "next/navigation";
import ArrowIcon from "./arrowIcon";

type Props = {
  id: number;
  habit: string;
  state: State[];
};

export default function Calendar({ habit }: Props) {
  const router = useRouter();

  const weekDays = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"];

  function getDaysInMonth(month: number, year: number) {
    const date = new Date(year, month, 1);
    const firstDayWeek = date.getDay();
    const numberOfEmptyDays = Array(firstDayWeek == 0 ? 6 : firstDayWeek).fill(
      null,
    );
    const days = [...numberOfEmptyDays];
    while (date.getMonth() == month) {
      days.push(new Date(date));
      date.setDate(date.getDate() + 1);
    }
    return days;
  }

  const currentDate = new Date();
  const currentDay = currentDate.getDate();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  const daysInMonth = getDaysInMonth(currentMonth, currentYear);

  return (
    <section>
      <MyButton onClick={() => router.push("/")} color="link">
        <ArrowIcon width={12} height={12} />
        Voltar
      </MyButton>
      <div className="my-2 w-full rounded-md bg-neutral-800">
        <div className="mx-2 my-4 flex justify-between font-sans text-neutral-400">
          <MyButton>
            <ArrowIcon width={12} height={12} className="stroke-neutral-400" />
          </MyButton>
          <span>Janeiro de 2024</span>
          <MyButton>
            <ArrowIcon
              width={12}
              height={12}
              className="rotate-180 stroke-neutral-400"
            />
          </MyButton>
        </div>
        <div className="mt-2 grid w-full grid-cols-7">
          {weekDays.map((day) => (
            <div key={day} className="flex flex-col items-center p-2">
              <span className="font-sans text-xs font-light text-neutral-200">
                {day}
              </span>
            </div>
          ))}
          {daysInMonth.map((day, index) => (
            <div key={index} className="flex flex-col items-center p-2">
              <span className="font-sans text-xs font-light text-neutral-400">
                {day?.getDate()}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
