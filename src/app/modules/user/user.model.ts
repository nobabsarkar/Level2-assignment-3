import { model, Schema } from 'mongoose';
import { Tuser } from './user.interface';

const userSchema = new Schema<Tuser>({
  name: { type: String, required: [true, 'Name is Required'] },
  email: { type: String, required: [true, 'Email is Required'], unique: true },
  password: {
    type: String,
    required: [true, 'Password is Required'],
    select: 0,
  },
  phone: { type: String, required: [true, 'Phone is Required'] },
  address: { type: String, required: [true, 'Address is Required'] },
  role: {
    type: String,
    required: [true, 'Role is required'],
    enum: ['USER', 'ADMIN'],
  },
});

export const User = model<Tuser>('User', userSchema);
