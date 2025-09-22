export interface IStats {
  role: string;
  overview: Overview;
  users: Users;
}

export interface Overview {
  totalParcel: number;
  delivered: number;
  inTransit: number;
  pending: number;
  cancelled: number;
  flagged: number;
}

export interface Users {
  totalUsers: number;
  senders: number;
  receivers: number;
  admins: number;
}

export interface IChartStats {
  role: string
  statusDistribution: StatusDistribution[]
  monthlyShipments: MonthlyShipment[]
}

export interface StatusDistribution {
  count: number
  status: string
}

export interface MonthlyShipment {
  year: number
  month: string
  count: number
}
