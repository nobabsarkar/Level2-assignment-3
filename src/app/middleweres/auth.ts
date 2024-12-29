import { NextFunction, Request, Response } from 'express';
import { USER_Role } from '../modules/user/user.constant';
import catchAsync from '../utils/catchAsync';
import AppError from '../errors/AppError';
import { StatusCodes } from 'http-status-codes';
import jwt, { JwtPayload } from 'jsonwebtoken';
import config from '../config';
import { User } from '../modules/user/user.model';

export const auth = (...requiredRoles: (keyof typeof USER_Role)[]) => {
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const accessToken = req.headers.authorization?.split(' ')[1];

    if (!accessToken) {
      throw new AppError(
        StatusCodes.UNAUTHORIZED,
        'You are not authorized to access this route'
      );
    }

    const verifyedToken = jwt.verify(
      accessToken as string,
      config.jwt_access_secret as string
    );

    const { role, email } = verifyedToken as JwtPayload;

    const user = await User.findOne({ email });

    if (!user) {
      throw new AppError(StatusCodes.UNAUTHORIZED, 'User not Found');
    }

    if (user.role !== role) {
      throw new AppError(
        StatusCodes.UNAUTHORIZED,
        'You are not authorized to create admin'
      );
    }

    // if (role !== 'admin') {
    //   throw new AppError(
    //     StatusCodes.UNAUTHORIZED,
    //     'You are not authorized to create admin'
    //   );
    // }

    if (!requiredRoles.includes(role)) {
      throw new AppError(
        StatusCodes.UNAUTHORIZED,
        'You are not authorized to access this route'
      );
    }

    next();
  });
};
