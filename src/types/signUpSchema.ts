import { z } from "zod";

export const signUpschema = z.object({
  email: z.string().email(),
  name: z.string().min(4),
  password: z.string().min(6).max(20),
});

export type signUpSchemaProps = z.infer<typeof signUpschema>;
