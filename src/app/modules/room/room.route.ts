import express from 'express';
import { roomControllers } from './room.controller';
import validateRequest from '../../middleweres/validateRequest';
import { roomValidations } from './room.validation';
import jwt from 'jsonwebtoken';
import config from '../../config';

const router = express.Router();

router.post(
  '/rooms',
  (req, res, next) => {
    const token = req.headers.authorization;

    const verifyedToken = jwt.verify(
      token as string,
      config.jwt_access_secret as string
    );
    console.log(verifyedToken);

    next();
  },
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
