import { Router } from 'express';
import { AuthRoutes } from '../modules/auth/auth.route';
import { roomRoutes } from '../modules/room/room.route';
import { slotRoutes } from '../modules/Slot/slot.route';
import { BookingRoutes } from '../modules/booking/booking.route';

const router = Router();

const moduleRoutes = [
  {
    path: '/auth',
    route: AuthRoutes,
  },
  {
    path: '',
    route: roomRoutes,
  },
  {
    path: '',
    route: slotRoutes,
  },
  {
    path: '',
    route: BookingRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
