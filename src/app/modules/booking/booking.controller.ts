import { StatusCodes } from 'http-status-codes';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { Booking } from './booking.model';

const createBooking = catchAsync(async (req, res) => {
  const { date, room, slot, totalAmount, user, isConfirmed, isDeleted } =
    req.body;

  const newBooking = new Booking({
    slot,
    date,
    room,
    totalAmount,
    user,
    isConfirmed,
    isDeleted,
  });

  await newBooking.save();

  const populateBooking = await Booking.findById(newBooking._id)
    .populate('slot')
    .populate('room')
    .populate('user');

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Booking created successfully',
    data: populateBooking,
  });
});

export const BookingControllers = {
  createBooking,
};
