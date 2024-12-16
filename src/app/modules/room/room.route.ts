import express from 'express';
import { roomControllers } from './room.controller';

const router = express.Router();

router.post('/rooms', roomControllers.createRoom);

router.get('/rooms', roomControllers.getAllRooms);

router.get('/rooms/:id', roomControllers.getSingleRooms);

export const roomRoutes = router;
