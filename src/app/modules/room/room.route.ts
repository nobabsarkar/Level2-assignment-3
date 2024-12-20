import express from 'express';
import { roomControllers } from './room.controller';
import validateRequest from '../../middleweres/validateRequest';
import { roomValidations } from './room.validation';
import { auth } from '../../middleweres/auth';
import { USER_Role } from '../user/user.constant';

const router = express.Router();

router.post(
  '/rooms',
  auth(USER_Role.ADMIN),
  validateRequest(roomValidations.roomValidationSchema),
  roomControllers.createRoom
);

router.get('/rooms', roomControllers.getAllRooms);

router.get('/rooms/:id', roomControllers.getSingleRooms);

router.put(
  '/rooms/:id',
  validateRequest(roomValidations.updateRoomValidationSchema),
  roomControllers.updateRoom
);

router.delete('/rooms/:id', roomControllers.deleteRoom);

export const roomRoutes = router;
