import { z } from 'zod';

const userValidationSchema = z.object({
  body: z.object({
    name: z.string(),
    email: z.string(),
    password: z.string(),
    phone: z.string(),
    address: z.string(),
    role: z.enum(['USER', 'ADMIN']).default('USER'),
  }),
});

export const userValidations = {
  userValidationSchema,
};
