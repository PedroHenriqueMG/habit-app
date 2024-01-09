import { getServerAuthSession } from "~/server/auth";
import TableHabit from "./_components/tableHabit";

export default async function Home() {
  const session = await getServerAuthSession();

  return (
    <section className="flex flex-col items-center gap-8 px-4 pt-16">
      {session ? (
        <TableHabit />
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
