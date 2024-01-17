export default function Habit({ params }: { params: { habit: number } }) {
  return (
    <section>
      <h1 className="text-xl text-white">{params.habit}</h1>
    </section>
  );
}
