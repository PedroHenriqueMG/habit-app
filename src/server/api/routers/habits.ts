import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { habitsSchema, habitsSchemaDelete } from "~/types/habitsSchema";

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
          create: Array.from({ length: 7 }).map((_, index) => ({
            date: new Date(new Date().setDate(new Date().getDate() - index)),
            status: null,
          })),
        },
      },
      include: {
        state: true,
      },
    });
  }),
  delete: publicProcedure
    .input(habitsSchemaDelete)
    .mutation(({ ctx, input }) =>
      ctx.db.habits.delete({ where: { id: input.id } }),
    ),
});
