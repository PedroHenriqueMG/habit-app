import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6).max(20),
});

export type loginSchemaProps = z.infer<typeof loginSchema>;
