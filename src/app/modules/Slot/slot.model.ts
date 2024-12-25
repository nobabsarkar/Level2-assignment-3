import { model, Schema } from 'mongoose';
import { TSlot } from './slot.interface';

const slotSchema = new Schema<TSlot>({
  room: {
    type: Schema.Types.ObjectId,
    required: [true, 'Room is required'],
    unique: true,
    ref: 'Room',
  },
  date: { type: String, required: [true, 'Date is required'] },
  startTime: { type: String, required: [true, 'Start time is required'] },
  endTime: { type: String, required: [true, 'End Time is required'] },
  isBooked: Boolean,
});

export const Slot = model<TSlot>('Slot', slotSchema);
