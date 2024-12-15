import { StatusCodes } from 'http-status-codes';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { AuthService } from './auth.service';
import config from '../../config';

const signUp = catchAsync(async (req, res) => {
  const result = await AuthService.singUp(req.body);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'User registred successfully!',
    data: result,
  });
});

const login = catchAsync(async (req, res) => {
  const { token, refreshToken, data } = await AuthService.login(req.body);

  res.cookie('refreshToken', refreshToken, {
    httpOnly: true,
    secure: config.NODE_ENV === 'production',
  });

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'User logged in Successfully',
    token,
    data,
  });
});

export const authControllers = {
  signUp,
  login,
};
