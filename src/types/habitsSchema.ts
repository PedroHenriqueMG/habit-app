import { z } from "zod";

export const habitsSchema = z.object({
  habit: z.string().min(1, "Hábito inválido"),
});

export const habitSchemaUpdate = z.object({
  date: z.string(),
  status: z.boolean(),
  habits_id: z.number(),
});

export const stateFormSchema = z.object({
  date: z.string(),
  status: z.enum(["true", "false"]),
});

export const habitsSchemaDelete = z.object({
  id: z.number(),
});

export type habitsSchemaProps = z.infer<typeof habitsSchema>;
export type stateFormSchemaProps = z.infer<typeof stateFormSchema>;
