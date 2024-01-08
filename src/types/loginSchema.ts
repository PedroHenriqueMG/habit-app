import { z } from "zod";

export const loginSchema = z.object({
  name: z.string().min(4),
  password: z.string().min(6).max(20),
});

export type loginSchemaProps = z.infer<typeof loginSchema>;
