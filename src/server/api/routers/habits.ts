import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import {
  habitsSchema,
  habitsSchemaDelete,
  habitsSchemaUpdate,
} from "~/types/habitsSchema";

export const habitsRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.db.habits.findMany({ include: { state: true } });
  }),
  getOne: publicProcedure.input(Number).query(({ ctx, input }) => {
    return ctx.db.habits.findUnique({ where: { id: input } });
  }),
  create: publicProcedure.input(habitsSchema).mutation(({ ctx, input }) => {
    return ctx.db.habits.create({
      data: {
        habit: input.habit,
        state: {
          create: input.state.map((state) => ({
            date: state.date,
            status: state.status,
          })),
        },
      },
      include: { state: true },
    });
  }),
  update: publicProcedure
    .input(habitsSchemaUpdate)
    .mutation(({ ctx, input }) => {
      return ctx.db.habits.update({
        where: { id: input.id },
        data: {
          habit: input.habit,
        },
      });
    }),
  delete: publicProcedure
    .input(habitsSchemaDelete)
    .mutation(({ ctx, input }) =>
      ctx.db.habits.delete({ where: { id: input.id } }),
    ),
});
