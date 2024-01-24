import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email("Digite um email válido"),
  password: z.string().min(6, "Senha muito curta").max(20, "Senha muito longa"),
});

export type loginSchemaProps = z.infer<typeof loginSchema>;
