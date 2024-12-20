export type Tuser = {
  name: string;
  email: string;
  password: string;
  phone: string;
  address: string;
  role: 'USER' | 'ADMIN';
  // role: keyof typeof USER_Role.USER;
};
