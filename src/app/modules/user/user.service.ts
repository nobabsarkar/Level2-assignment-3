import { Tuser } from './user.interface';
import { User } from './user.model';

const createUserIntoDB = async (payload: Tuser) => {
  const result = await User.create(payload);
  return result;
};

export const UserServices = {
  createUserIntoDB,
};
