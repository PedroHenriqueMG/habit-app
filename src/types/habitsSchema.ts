import { z } from "zod";

export const habitsSchema = z.object({
  habit: z.string().min(1, "Hábito inválido"),
  state_id: z.coerce.number(),
});

export const habitsSchemaUpdate = z
  .object({
    id: z.number(),
    habit: z.string(),
    state_id: z.number(),
  })
  .partial()
  .required({ id: true });

export type habitsSchemaProps = z.infer<typeof habitsSchema>;
