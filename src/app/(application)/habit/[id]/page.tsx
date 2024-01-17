import { api } from "~/trpc/server";

export default async function Habit({
  params: { id },
}: {
  params: { id: number };
}) {
  const habit = await api.habits.getOne.query(id);

  return (
    <section>
      <h1 className="text-xl text-white">{habit?.habit}</h1>
    </section>
  );
}
