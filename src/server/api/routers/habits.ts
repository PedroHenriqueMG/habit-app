import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import {
  habitSchemaUpdate,
  habitsSchemaCreate,
  habitsSchemaDelete,
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
    .mutation(async ({ ctx, input }) => {
      const { date, status, habits_id } = input;

      const exists = await ctx.db.state.findFirst({
        where: { date },
      });

      if (exists) {
        return {
          status: 401,
          message: "Email already exists",
        };
      }
      const result = await ctx.db.state.create({
        data: {
          date: date,
          status: status,
          habits_id: habits_id,
        },
      });
      return {
        status: 201,
        message: "Account created successfully",
        result: result.date,
      };
    }),
  delete: publicProcedure.input(habitsSchemaDelete).mutation(({ ctx, input }) =>
    ctx.db.habits.delete({
      where: { id: input.id },
      include: { state: true },
    }),
  ),
});
