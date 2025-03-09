export interface Logininfo {
  _id: string;
  firstName: string;
  lastName: string;
  age: number;
  email: string;
  password: string;
  address: string;
  phone: string;
  role: string;
  zipcode: string;
  avatar: string;
  gender: 'MALE' | 'FEMALE';
  cartID: string;
  verified: boolean;
  chatIds: [];
}
