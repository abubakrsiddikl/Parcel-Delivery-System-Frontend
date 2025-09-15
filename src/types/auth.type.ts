export type TRole = "admin" | "sender" | "receiver";

export type IsActive = "ACTIVE" | "INACTIVE" | "BLOCKED" | "UNBLOCKED";

export interface IUser {
  _id: string;
  name: string;
  email: string;
  isDeleted: boolean;
  isActive: IsActive;
  role: string;
  auths: Auth[];
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface Auth {
  provider: string;
  providerId: string;
}

export interface IUserPayload {
  name: string;
  email: string;
  phone: string;
  role: TRole;
  password: string;
  confirmPassword: string;
  terms: boolean;
}
