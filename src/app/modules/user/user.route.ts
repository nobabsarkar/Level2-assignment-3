import express from 'express';
import validateRequest from '../../middleweres/validateRequest';
import { userValidations } from './user.validation';
import { UserControllers } from './user.controller';

const router = express.Router();

// router.post(
//   '/signup',
//   validateRequest(userValidations.userValidationSchema),
//   UserControllers.createUser
// );

export const UserRoutes = router;
