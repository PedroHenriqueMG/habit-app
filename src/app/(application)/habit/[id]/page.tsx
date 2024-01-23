import { api } from "~/trpc/server";
import Calendar from "../../_components/calendar";
import StateModal from "../../_components/modals/stateModal";

export default async function Habit({
  params: { id },
}: {
  params: { id: number };
}) {
  const habit = await api.habits.getOne.query(id);

  return (
    <section className="flex flex-col items-center gap-8 px-12 py-8">
      <h1 className="text-center font-display text-2xl font-light text-white">
        {habit?.habit}
      </h1>
      <Calendar habits={habit} />
      <StateModal path={id} />
    </section>
  );
}
