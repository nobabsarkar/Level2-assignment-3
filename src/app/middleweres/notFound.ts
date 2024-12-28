import { Request, Response } from 'express';
// import { StatusCodes } from 'http-status-codes';

// const notFound = (req: Request, res: Response) => {
//   res.status(StatusCodes.NOT_FOUND).json({
//     success: false,
//     message: 'Not Found',
//     error: '',
//   });
// };
const notFound = (req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    message: 'Not Found',
    error: '',
  });
};

export default notFound;
