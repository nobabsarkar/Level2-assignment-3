import { z } from 'zod';
import { USER_Role } from './user.constant';

const userValidationSchema = z.object({
  body: z.object({
    name: z.string(),
    email: z.string(),
    password: z.string(),
    phone: z.string(),
    address: z.string(),
    role: z.nativeEnum(USER_Role).default(USER_Role.USER),
  }),
});

export const userValidations = {
  userValidationSchema,
};
