import config from '../../config';
import { Tuser } from '../user/user.interface';
import { User } from '../user/user.model';
import jwt from 'jsonwebtoken';
import { TLogin } from './auth.interface';
import AppError from '../../errors/AppError';
import { StatusCodes } from 'http-status-codes';

const singUp = async (payload: Tuser) => {
  const user = await User.findOne({ email: payload.email });
  if (user) {
    throw new Error('User is already exits');
  }

  // set user role
  // payload.role = USER_Role.USER;

  const newUser = await User.create(payload);
  return newUser;
};

const login = async (payload: TLogin) => {
  const data = await User.findOne({ email: payload.email }).select('+password');
  if (!data) {
    throw new AppError(StatusCodes.NOT_FOUND, 'User Not Found!');
  }

  const jwtPayload = {
    email: data?.email,
    role: data?.role,
  };

  if (data.password !== payload.password) {
    throw new Error('Password Not Match');
  }

  const userData = {
    ...data.toObject(),
  };
  delete userData.password;

  const token = jwt.sign(jwtPayload, config.jwt_access_secret as string, {
    expiresIn: config.jwt_access_expires_in,
  });

  const refreshToken = jwt.sign(
    jwtPayload,
    config.jwt_refresh_secret as string,
    {
      expiresIn: config.jwt_refresh_expires_in,
    }
  );

  return {
    token,
    refreshToken,
    data: userData,
  };
};

export const AuthService = {
  singUp,
  login,
};
