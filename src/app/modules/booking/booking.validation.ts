import { boolean, z } from 'zod';

const bookingValidationSchema = {
  body: z.object({
    date: z.string(),
    totalAmount: z.number(),
    isConfirmed: z.string(),
    isDeleted: boolean(),
  }),
};

const updateBookingValidationSchema = {
  body: z.object({
    date: z.string().optional(),
    totalAmount: z.number().optional(),
    isConfirmed: z.string().optional(),
    isDeleted: boolean().optional(),
  }),
};

export const bookingValidations = {
  bookingValidationSchema,
  updateBookingValidationSchema,
};
