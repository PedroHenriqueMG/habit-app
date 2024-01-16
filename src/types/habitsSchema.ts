import { z } from "zod";

export const stateSchema = z.object({
  date: z.coerce.date(),
  status: z.boolean().nullable(),
  habits_id: z.number(),
});

export const habitsSchema = z.object({
  habit: z.string().min(1, "Hábito inválido"),
});

export const habitsSchemaDelete = z.object({
  id: z.number(),
});

export type habitsSchemaProps = z.infer<typeof habitsSchema>;
