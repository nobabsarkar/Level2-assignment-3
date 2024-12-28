import { model, Schema } from 'mongoose';
import { TBooking } from './booking.interface';

const bookingModelSchema = new Schema<TBooking>({
  date: { type: String, required: [true, 'Date is requried'] },
  //   room: {
  //     type: Schema.Types.ObjectId,
  //     ref: 'Room',
  //   },
  totalAmount: { type: Number, required: [true, 'Amount is required'] },
  isConfirmed: { type: String, required: true },
  isDeleted: Boolean,
});

export const Booking = model<TBooking>('Booking', bookingModelSchema);
