import express from 'express';
import { authControllers } from './auth.controller';
import validateRequest from '../../middleweres/validateRequest';
import { userValidations } from '../user/user.validation';

const router = express.Router();

router.post(
  '/signup',
  validateRequest(userValidations.userValidationSchema),
  authControllers.signUp
);
router.post('/login', authControllers.login);

export const AuthRoutes = router;
