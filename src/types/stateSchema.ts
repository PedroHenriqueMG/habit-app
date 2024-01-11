import { z } from "zod";

export const stateSchema = z.object({
  date: z.coerce.date(),
  status: z.coerce.boolean(),
  habits_id: z.coerce.number(),
});

export const stateSchemaUpdate = z.object({
  id: z.number(),
  date: z.coerce.date(),
  status: z.coerce.boolean(),
  habits_id: z.coerce.number(),
});
