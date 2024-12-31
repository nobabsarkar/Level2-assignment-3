import express from 'express';
import { BookingControllers } from './booking.controller';
import { auth } from '../../middleweres/auth';
import { USER_Role } from '../user/user.constant';

const router = express.Router();

router.post(
  '/bookings',
  // validateRequest(bookingValidations.bookingValidationSchema),
  auth(USER_Role.user),
  BookingControllers.createBooking
);

router.get(
  '/bookings',
  auth(USER_Role.admin),
  BookingControllers.getAllBooking
);

router.get(
  '/my-bookings',
  auth(USER_Role.user),
  BookingControllers.getAllUserBooking
);

router.delete(
  '/bookings/:id',
  auth(USER_Role.admin),
  BookingControllers.deleteBooking
);

export const BookingRoutes = router;
