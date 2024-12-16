import { model, Schema } from 'mongoose';
import { TRoom } from './room.interface';

const roomSchema = new Schema<TRoom>({
  name: { type: String, required: [true, 'Name is required'] },
  roomNo: { type: Number, required: [true, 'RoomNo is required'] },
  floorNo: { type: Number, required: [true, 'FloorNo is required'] },
  capacity: { type: Number, required: [true, 'Capacity is required'] },
  pricePerSlot: { type: Number, required: [true, 'PricePerSlot is required'] },
  amenities: ['Projector', 'Whiteboard'],
  isDeleted: false,
});

export const Room = model<TRoom>('Room', roomSchema);
