import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { habitsSchema, habitsSchemaUpdate } from "~/types/habitsSchema";

export const habitsRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.db.habits.findMany();
  }),
  getOne: publicProcedure.input(Number).query(({ ctx, input }) => {
    return ctx.db.habits.findUnique({ where: { id: input } });
  }),
  create: publicProcedure.input(habitsSchema).mutation(({ ctx, input }) => {
    return ctx.db.habits.create({
      data: {
        habit: input.habit,
      },
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
});
