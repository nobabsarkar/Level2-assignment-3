import express from 'express';
import { SlotControllers } from './slot.controller';

const router = express.Router();

router.post('/slots', SlotControllers.createSlot);

export const slotRoutes = router;
