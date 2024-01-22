import { api } from "~/trpc/server";
import Calendar from "../../_components/calendar";

export default async function Habit({
  params: { id },
}: {
  params: { id: number };
}) {
  const habit = await api.habits.getOne.query(id);

  return (
    <section className="container relative flex flex-col gap-8 px-12 pt-16">
      <h1 className="text-center font-display text-2xl font-light text-white">
        {habit?.habit}
      </h1>
      <Calendar habits={habit} />
    </section>
  );
}
