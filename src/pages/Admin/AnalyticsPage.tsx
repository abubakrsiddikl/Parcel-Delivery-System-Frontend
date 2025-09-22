import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import LoadingSpinner from "@/components/LoadingSpinner";
import { useGetDashboardStatsQuery } from "@/redux/feature/stats/stats.api";
import {
  Package,
  CheckCircle,
  Truck,
  Clock,
  XCircle,
  Flag,
  Users,
  UserPlus,
  UserCheck,
  Shield,
} from "lucide-react";
import Chart from "@/components/module/Analytics/Chart";

export default function AnalyticsPage() {
  const { data: stats, isLoading, isError } = useGetDashboardStatsQuery();

  if (isError) return <p className="text-red-500">Something Went Wrong!</p>;
  if (isLoading) return <LoadingSpinner />;

  const data = stats?.data;

  const overviewCards = [
    {
      title: "Total Parcels",
      value: data?.overview.totalParcel,
      icon: Package,
      color: "text-blue-600",
    },
    {
      title: "Delivered",
      value: data?.overview.delivered,
      icon: CheckCircle,
      color: "text-green-600",
    },
    {
      title: "In Transit",
      value: data?.overview.inTransit,
      icon: Truck,
      color: "text-yellow-600",
    },
    {
      title: "Pending",
      value: data?.overview.pending,
      icon: Clock,
      color: "text-orange-600",
    },
    {
      title: "Cancelled",
      value: data?.overview.cancelled,
      icon: XCircle,
      color: "text-red-600",
    },
  ];

  if (data?.overview.flagged !== undefined) {
    overviewCards.push({
      title: "Flagged",
      value: data.overview.flagged,
      icon: Flag,
      color: "text-purple-600",
    });
  }

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <h1 className="text-2xl font-bold tracking-tight">
        📊 Analytics Dashboard
      </h1>
      <p className="text-muted-foreground">
        Overview of your parcel delivery performance and system stats.
      </p>

      {/* Overview Cards */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {overviewCards.map((card, idx) => (
          <Card key={idx} className="shadow-sm hover:shadow-md transition-all">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">
                {card.title}
              </CardTitle>
              <card.icon className={`h-5 w-5 ${card.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{card.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Users Analytics (Admin Only) */}
      {data?.users && (
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">👥 User Analytics</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Card className="shadow-sm hover:shadow-md transition-all">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">
                  Total Users
                </CardTitle>
                <Users className="h-5 w-5 text-blue-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {data.users.totalUsers}
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-sm hover:shadow-md transition-all">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Senders</CardTitle>
                <UserPlus className="h-5 w-5 text-green-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{data.users.senders}</div>
              </CardContent>
            </Card>

            <Card className="shadow-sm hover:shadow-md transition-all">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Receivers</CardTitle>
                <UserCheck className="h-5 w-5 text-orange-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{data.users.receivers}</div>
              </CardContent>
            </Card>

            <Card className="shadow-sm hover:shadow-md transition-all">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Admins</CardTitle>
                <Shield className="h-5 w-5 text-purple-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{data.users.admins}</div>
              </CardContent>
            </Card>
          </div>
        </div>
      )}
      <Chart></Chart>
    </div>
  );
}
