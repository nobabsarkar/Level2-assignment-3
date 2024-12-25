import express from 'express';
import { SlotControllers } from './slot.controller';
import validateRequest from '../../middleweres/validateRequest';
import { slotValidations } from './slot.validation';
import { auth } from '../../middleweres/auth';
import { USER_Role } from '../user/user.constant';

const router = express.Router();

router.post(
  '/slots',
  auth(USER_Role.admin),
  validateRequest(slotValidations.slotValidationSchema),
  SlotControllers.createSlot
);

export const slotRoutes = router;
