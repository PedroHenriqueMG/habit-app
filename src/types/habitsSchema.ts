import { z } from "zod";

export const stateSchema = z.object({
  date: z.coerce.date(),
  status: z.boolean().nullable(),
});

export const habitsSchema = z.object({
  habit: z.string().min(1, "Hábito inválido"),
  state: z.array(stateSchema),
});

export const habitsSchemaUpdate = z
  .object({
    id: z.number(),
    habit: z.string(),
  })
  .partial()
  .required({ id: true });

export const habitsSchemaDelete = z.object({
  id: z.number(),
});

export type habitsSchemaProps = z.infer<typeof habitsSchema>;
