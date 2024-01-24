import { z } from "zod";

export const signUpschema = z.object({
  email: z.string().email("Digite um email válido"),
  name: z.string().min(2, "Nome muito curto"),
  password: z.string().min(6, "Senha muito curta").max(20, "Senha muito longa"),
});

export type signUpSchemaProps = z.infer<typeof signUpschema>;
