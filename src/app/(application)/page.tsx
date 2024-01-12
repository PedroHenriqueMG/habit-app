import { getServerAuthSession } from "~/server/auth";
import TableHabit from "./_components/tableHabit";
import { api } from "~/trpc/server";

export default async function Home() {
  const session = await getServerAuthSession();

  const habits = await api.habits.getAll.query();

  return (
    <section className="flex flex-col items-center gap-8 px-4 pt-16">
      {session ? (
        <TableHabit habits={habits} />
      ) : (
        <div>
          <h2 className="text-white">
            Faça seu login para gerenciar seus hábitos
          </h2>
        </div>
      )}
    </section>
  );
}
