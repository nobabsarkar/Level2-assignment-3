import express from 'express';
import { roomControllers } from './room.controller';
import validateRequest from '../../middleweres/validateRequest';
import { roomValidations } from './room.validation';

const router = express.Router();

router.post(
  '/rooms',
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
