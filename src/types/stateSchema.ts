import { z } from "zod";

export const stateSchema = z.object({
  status: z.coerce.boolean(),
  habits_id: z.coerce.number(),
});

export const stateSchemaUpdate = z.object({
  id: z.number(),
  status: z.coerce.boolean(),
  habits_id: z.coerce.number(),
});
