import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

const signUpSchema = z.object({
  name: z.string(),
  password: z.string(),
});

export const signupRouter = createTRPCRouter({
  create: publicProcedure
    .input(signUpSchema)
    .mutation(async ({ input, ctx }) => {
      const { name, password } = input;

      const exists = await ctx.db.user.findFirst({
        where: { name },
      });

      if (exists) {
        return {
          status: 401,
          message: "Email already exists",
        };
      }

      const result = await ctx.db.user.create({
        data: { name: name, password: password },
      });

      return {
        status: 201,
        message: "Account created successfully",
        result: result.name,
      };
    }),
});
