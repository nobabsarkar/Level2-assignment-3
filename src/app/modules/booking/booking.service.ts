import { TBooking } from './booking.interface';
import { Booking } from './booking.model';

const createBookingIntoDB = async (payload: TBooking) => {
  const result = await Booking.create(payload);
  return result;
};

const getAllBookingFromDB = async () => {
  const result = await Booking.find()
    .populate('slot')
    .populate('room')
    .populate('user');
  return result;
};

const getAllUserBooking = async () => {
  const result = await Booking.find().populate('slot').populate('room');
  return result;
};

const updateBookingIntoDB = async (id: string, payload: Partial<TBooking>) => {
  const result = await Booking.findByIdAndUpdate(id, payload, { new: true });
  return result;
};

const deleteBookingIntoDB = async (id: string) => {
  const result = await Booking.findByIdAndUpdate(
    id,
    { isDeleted: true },
    { new: true }
  );

  return result;
};

export const BookingServices = {
  createBookingIntoDB,
  getAllBookingFromDB,
  getAllUserBooking,
  deleteBookingIntoDB,
  updateBookingIntoDB,
};
