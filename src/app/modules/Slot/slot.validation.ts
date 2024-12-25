import { z } from 'zod';

const slotValidationSchema = z.object({
  body: z.object({
    date: z.string(),
    startTime: z.string(),
    endTime: z.string(),
    isBooked: z.boolean(),
  }),
});

export const slotValidations = {
  slotValidationSchema,
};
