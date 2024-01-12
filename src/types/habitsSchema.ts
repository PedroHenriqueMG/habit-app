import { z } from "zod";

export const habitsSchema = z.object({
  habit: z.string().min(1, "Hábito inválido"),
});

export const habitsSchemaDelete = z.object({
  id: z.number(),
});

export const habitsSchemaUpdate = z
  .object({
    id: z.number(),
    habit: z.string(),
  })
  .partial()
  .required({ id: true });

export type habitsSchemaProps = z.infer<typeof habitsSchema>;
