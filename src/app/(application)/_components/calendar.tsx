/* eslint-disable @typescript-eslint/no-unsafe-assignment */
"use client";

import { type State } from "@prisma/client";
import { MyButton } from "./ui/Button";
import { useRouter } from "next/navigation";
import ArrowIcon from "./arrowIcon";
import { useEffect, useState } from "react";
import DayState from "./dayState";

type Props = {
  habits: {
    id: number;
    habit: string;
    state: State[];
  };
};

export default function Calendar({ habits }: Props) {
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();
  const weekDays = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"];

  const [month, setMonth] = useState(currentMonth);
  const [year, setYear] = useState(currentYear);
  const [selectDate, setSelectDate] = useState(new Date());
  const router = useRouter();

  function getDaysInMonth(month: number, year: number): Date[] {
    const date = new Date(year, month, 1);
    const firstDayWeek = date.getDay();
    const numberOfEmptyDays = Array(firstDayWeek == 0 ? 6 : firstDayWeek).fill(
      null,
    );
    const days: Date[] = [...numberOfEmptyDays];
    while (date.getMonth() == month) {
      days.push(new Date(date));
      date.setDate(date.getDate() + 1);
    }
    return days;
  }

  const daysInMonth = getDaysInMonth(month, year);

  useEffect(() => {
    setSelectDate(new Date(year, month, 1));
  }, [year, month]);

  // change to previus mouth
  function onNextMonth() {
    if (month == 11) {
      setYear(year + 1);
      setMonth(0);
    } else {
      setMonth(month + 1);
    }
  }

  // change to next mouth
  function onPrevMonth() {
    if (month == 0) {
      setYear(year - 1);
      setMonth(11);
    } else {
      setMonth(month - 1);
    }
  }

  function getTitleMouth() {
    return `${selectDate.toLocaleString("pt-BR", {
      month: "long",
    })} de ${selectDate.getFullYear()}`;
  }

  function getStatusDay(date: string | undefined) {
    const matchinStatus = habits?.state?.find((state) => state.date === date);
    if (matchinStatus) {
      return matchinStatus.status;
    }
    return undefined;
  }

  return (
    <section>
      <MyButton onClick={() => router.push("/")} color="link">
        <ArrowIcon width={20} height={20} />
        Voltar
      </MyButton>
      <div className="my-2 w-full rounded-md bg-neutral-800">
        <div className="mx-2 my-4 flex items-center justify-between font-sans text-neutral-400">
          <MyButton onClick={onPrevMonth}>
            <ArrowIcon width={20} height={20} className="stroke-neutral-400" />
          </MyButton>
          <span>{getTitleMouth()}</span>
          <MyButton onClick={onNextMonth}>
            <ArrowIcon
              width={20}
              height={20}
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
              {day?.getDate() && (
                <DayState day={getStatusDay(day.toISOString().slice(0, 10))} />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
