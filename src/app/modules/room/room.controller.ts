import { StatusCodes } from 'http-status-codes';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { roomServices } from './room.service';

const createRoom = catchAsync(async (req, res) => {
  const result = await roomServices.createRoomIntoDB(req.body);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Room added successfully',
    data: result,
  });
});

export const roomControllers = {
  createRoom,
};
