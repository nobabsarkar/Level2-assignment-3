import { z } from 'zod';

const roomValidationSchema = z.object({
  body: z.object({
    name: z.string(),
    roomNo: z.number(),
    floorNo: z.number(),
    capacity: z.number(),
    pricePerSlot: z.number(),
    amenities: z.array(z.enum(['Projector', 'Whiteboard'])),
    isDeleted: z.boolean().optional(),
  }),
});
const updateRoomValidationSchema = z.object({
  body: z.object({
    name: z.string().optional(),
    roomNo: z.number().optional(),
    floorNo: z.number().optional(),
    capacity: z.number().optional(),
    pricePerSlot: z.number().optional(),
    amenities: z.array(z.enum(['Projector', 'Whiteboard'])).optional(),
    isDeleted: z.boolean().optional(),
  }),
});

export const roomValidations = {
  roomValidationSchema,
  updateRoomValidationSchema,
};
