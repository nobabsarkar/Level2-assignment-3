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

const getAllRooms = catchAsync(async (req, res) => {
  const result = await roomServices.getAllRoomFromDB();
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Room retrived successfully',
    data: result,
  });
});

const getSingleRooms = catchAsync(async (req, res) => {
  const { id } = req.body;
  const result = await roomServices.getSingleRoomFromDB(id);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Room retrived successfully',
    data: result,
  });
});

const updateRoom = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await roomServices.updateRoomIntoDB(id, req.body);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Room updated successfully',
    data: result,
  });
});

const deleteRoom = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await roomServices.deleteRoomFromDB(id);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Room deleted successfully',
    data: result,
  });
});

export const roomControllers = {
  createRoom,
  getAllRooms,
  getSingleRooms,
  updateRoom,
  deleteRoom,
};
