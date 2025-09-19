export type PARCEL_STATUS =
  | "Requested"
  | "Approved"
  | "Dispatched"
  | "In Transit"
  | "Delivered"
  | "Cancelled"
  | "Returned"
  | "Held";

export interface IParcel {
  receiver: Receiver;
  _id: string;
  trackingId: string;
  type: string;
  weight: number;
  fee: number;
  deliveryAddress: string;
  sender: Sender;
  currentStatus: string;
  statusLogs: StatusLog[];
  isFlagged: boolean;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface Receiver {
  user?: string;
  email: string;
  name: string;
  phone: string;
  address: string;
}

export interface Sender {
  _id: string;
  name: string;
  email: string;
}

export interface StatusLog {
  status: string;
  location: string;
  note: string;
  updatedBy: string;
  timestamp: string;
}

// Parcel create payload
export interface IParcelPayload {
  type: string;
  weight: number;
  deliveryAddress: string;
  receiver: Receiver;
}
