import { z } from "zod";

export const signUpschema = z.object({
  name: z.string().min(4),
  password: z.string().min(6).max(20),
});

export type signUpSchemaProps = z.infer<typeof signUpschema>;
