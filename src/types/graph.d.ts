export const typeDefs = ["type Query {\n  driver: String!\n  user: User\n}\n\ntype User {\n  email: String!\n  verifiedEmail: Boolean!\n  firstName: String!\n  lastName: String!\n  age: Int\n  sex: String!\n  password: String\n  phoneNumber: String!\n  verifiedPhoneNumber: Boolean!\n  profilePhoto: String\n  createdAt: String!\n  updatedAt: String\n  fullName: String\n  isDriving: Boolean!\n  isRiding: Boolean!\n  isBooked: Boolean!\n  lastLat: Float\n  lastLong: Float\n  lastPosition: Float\n}\n\ntype UserVerification {\n  verificationMethod: String!\n  payload: String!\n  key: String!\n  used: Boolean!\n  createdAt: String!\n  updatedAt: String!\n}\n"];
/* tslint:disable */

export interface Query {
  driver: string;
  user: User | null;
}

export interface User {
  email: string;
  verifiedEmail: boolean;
  firstName: string;
  lastName: string;
  age: number | null;
  sex: string;
  password: string | null;
  phoneNumber: string;
  verifiedPhoneNumber: boolean;
  profilePhoto: string | null;
  createdAt: string;
  updatedAt: string | null;
  fullName: string | null;
  isDriving: boolean;
  isRiding: boolean;
  isBooked: boolean;
  lastLat: number | null;
  lastLong: number | null;
  lastPosition: number | null;
}

export interface UserVerification {
  verificationMethod: string;
  payload: string;
  key: string;
  used: boolean;
  createdAt: string;
  updatedAt: string;
}
