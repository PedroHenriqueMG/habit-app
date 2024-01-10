import { createTRPCRouter } from "~/server/api/trpc";
import { signupRouter } from "./routers/signUp";
import { habitsRouter } from "./routers/habits";
import { stateRouter } from "./routers/state";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  signUp: signupRouter,
  habits: habitsRouter,
  state: stateRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
