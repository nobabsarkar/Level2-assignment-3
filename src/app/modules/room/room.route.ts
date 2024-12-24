import express from 'express';
import { roomControllers } from './room.controller';
import validateRequest from '../../middleweres/validateRequest';
import { roomValidations } from './room.validation';
import { auth } from '../../middleweres/auth';
import { USER_Role } from '../user/user.constant';

const router = express.Router();

router.post(
  '/rooms',
  auth(USER_Role.admin),
  validateRequest(roomValidations.roomValidationSchema),
  roomControllers.createRoom
);

router.get('/rooms', roomControllers.getAllRooms);

router.get('/rooms/:id', roomControllers.getSingleRooms);

router.put(
  '/rooms/:id',
  auth(USER_Role.admin),
  validateRequest(roomValidations.updateRoomValidationSchema),
  roomControllers.updateRoom
);

router.delete('/rooms/:id', auth(USER_Role.admin), roomControllers.deleteRoom);

export const roomRoutes = router;
