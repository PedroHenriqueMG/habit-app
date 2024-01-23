import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { signUpschema } from "~/types/signUpSchema";

export const signupRouter = createTRPCRouter({
  create: publicProcedure
    .input(signUpschema)
    .mutation(async ({ input, ctx }) => {
      const { email, name, password } = input;

      const exists = await ctx.db.user.findFirst({
        where: { email },
      });

      if (exists) {
        return {
          status: 401,
          message: "Email already exists",
        };
      }

      const result = await ctx.db.user.create({
        data: { email: email, name: name, password: password },
      });

      return {
        status: 201,
        message: "Account created successfully",
        result: result.name,
      };
    }),
});
