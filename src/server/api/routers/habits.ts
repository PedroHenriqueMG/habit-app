import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import {
  habitSchemaUpdate,
  habitsSchemaCreate,
  habitsSchemaDelete,
  stateSchemaUpdate,
} from "~/types/habitsSchema";

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
  create: publicProcedure
    .input(habitsSchemaCreate)
    .mutation(({ ctx, input }) => {
      return ctx.db.habits.create({
        data: {
          habit: input.habit,
          user_id: input.user_id,
        },
      });
    }),
  update: publicProcedure
    .input(habitSchemaUpdate)
    .mutation(({ ctx, input }) => {
      return ctx.db.state.create({
        data: {
          date: input.date,
          status: input.status,
          habits_id: input.habits_id,
        },
      });
    }),
  updateStatus: publicProcedure
    .input(stateSchemaUpdate)
    .mutation(({ ctx, input }) => {
      return ctx.db.state.update({
        where: { id: input.id },
        data: {
          status: input.status,
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
