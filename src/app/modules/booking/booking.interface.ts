import { Types } from 'mongoose';

export type TBooking = {
  date: string;
  //   room: Types.ObjectId;
  totalAmount: number;
  isConfirmed: string;
  isDeleted: boolean;
};
