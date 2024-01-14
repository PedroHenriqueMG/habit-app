import { z } from "zod";

export const stateSchema = z.object({
  date: z.coerce.date(),
  status: z.boolean().nullable(),
});

export const stateSchemaUpdate = z.object({
  id: z.number(),
  status: z.coerce.boolean(),
  habits_id: z.coerce.number(),
});
