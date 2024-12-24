import { model, Schema } from 'mongoose';
import { TSlot } from './slot.interface';

const slotSchema = new Schema<TSlot>({
  date: { type: String, required: [true, 'Date is required'] },
  startTime: { type: String, required: [true, 'Start time is required'] },
  endTime: { type: String, required: [true, 'End Time is required'] },
  isBooked: Boolean,
});

export const Slot = model<TSlot>('Slot', slotSchema);
