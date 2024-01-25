import { z } from "zod";

export const habitsSchema = z.object({
  habit: z.string().min(1, "Hábito inválido"),
});

export const habitsSchemaCreate = z.object({
  habit: z.string(),
  user_id: z.string(),
});

export const habitSchemaUpdate = z.object({
  date: z.string(),
  status: z.boolean(),
  habits_id: z.number(),
});

export const stateSchemaUpdate = z.object({
  date: z.string(),
  status: z.boolean(),
});

export const habitsSchemaDelete = z.object({
  id: z.number(),
});

export type habitsSchemaProps = z.infer<typeof habitsSchema>;
