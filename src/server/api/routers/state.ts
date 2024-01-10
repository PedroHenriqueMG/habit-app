import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { stateSchema, stateSchemaUpdate } from "~/types/stateSchema";

export const stateRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.db.state.findMany();
  }),
  getOne: publicProcedure.input(Number).query(({ ctx, input }) => {
    return ctx.db.state.findUnique({ where: { id: input } });
  }),
  create: publicProcedure.input(stateSchema).mutation(({ ctx, input }) => {
    return ctx.db.state.create({
      data: {
        date: input.date,
        status: input.status,
      },
    });
  }),
  update: publicProcedure
    .input(stateSchemaUpdate)
    .mutation(({ ctx, input }) => {
      return ctx.db.state.update({
        where: { id: input.id },
        data: {
          date: input.date,
          status: input.status,
        },
      });
    }),
});
