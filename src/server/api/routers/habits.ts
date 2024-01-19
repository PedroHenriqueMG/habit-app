import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { habitsSchema, habitsSchemaDelete } from "~/types/habitsSchema";

export const habitsRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.db.habits.findMany({ include: { state: true } });
  }),
  getOne: publicProcedure.input(Number).query(({ ctx, input }) => {
    return ctx.db.habits.findUnique({
      where: { id: input },
      include: { state: true },
    });
  }),
  create: publicProcedure.input(habitsSchema).mutation(({ ctx, input }) => {
    return ctx.db.habits.create({
      data: {
        habit: input.habit,
      },
    });
  }),
  delete: publicProcedure.input(habitsSchemaDelete).mutation(({ ctx, input }) =>
    ctx.db.habits.delete({
      where: { id: input.id },
      include: { state: true },
    }),
  ),
});
