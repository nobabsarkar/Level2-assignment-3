/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { StatusCodes } from 'http-status-codes';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { Booking } from './booking.model';
import { BookingServices } from './booking.service';

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

const getAllBooking = catchAsync(async (req, res) => {
  const result = await BookingServices.getAllBookingFromDB();

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'All booking retrieved succeessfully',
    data: result,
  });
});

const getAllUserBooking = catchAsync(async (req, res) => {
  const result = await BookingServices.getAllUserBooking();

  const withOutUserData = result.map((booking) => {
    const { user, ...rest } = booking.toObject();
    return rest;
  });

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'User bookings retrieved successfully',
    data: withOutUserData,
  });
});

const updateBooking = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await BookingServices.updateBookingIntoDB(id, req.body);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Booking updated successfully',
    data: result,
  });
});

const deleteBooking = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await BookingServices.deleteBookingIntoDB(id);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Booking deleted successfully',
    data: result,
  });
});

export const BookingControllers = {
  createBooking,
  getAllBooking,
  getAllUserBooking,
  deleteBooking,
  updateBooking,
};
