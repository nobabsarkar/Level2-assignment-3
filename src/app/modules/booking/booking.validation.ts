import { boolean, z } from 'zod';

const bookingValidationSchema = {
  body: z.object({
    date: z.string(),
    totalAmount: z.number(),
    isConfirmed: z.string(),
    isDeleted: boolean(),
  }),
};

export const bookingValidations = {
  bookingValidationSchema,
};
