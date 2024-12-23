export type Tuser = {
  name: string;
  email: string;
  password: string;
  phone: string;
  address: string;
  role: 'user' | 'admin';
  // role: keyof typeof USER_Role.USER;
};
