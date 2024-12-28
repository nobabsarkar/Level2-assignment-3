import express from 'express';
import { BookingControllers } from './booking.controller';
import validateRequest from '../../middleweres/validateRequest';
import { bookingValidations } from './booking.validation';

const router = express.Router();

router.post(
  '/bookings',
  validateRequest(bookingValidations.bookingValidationSchema),
  BookingControllers.createBooking
);

export const BookingRoutes = router;
