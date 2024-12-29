import express from 'express';
import { BookingControllers } from './booking.controller';
import validateRequest from '../../middleweres/validateRequest';
import { bookingValidations } from './booking.validation';
import { auth } from '../../middleweres/auth';
import { USER_Role } from '../user/user.constant';

const router = express.Router();

router.post(
  '/bookings',
  // validateRequest(bookingValidations.bookingValidationSchema),
  auth(USER_Role.user),
  BookingControllers.createBooking
);

export const BookingRoutes = router;
