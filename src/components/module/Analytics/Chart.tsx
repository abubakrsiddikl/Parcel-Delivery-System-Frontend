"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";
import LoadingSpinner from "@/components/LoadingSpinner";
import { useGetChartStatsQuery } from "@/redux/feature/stats/stats.api";
import type { StatusDistribution, MonthlyShipment } from "@/types";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

export default function Chart() {
  const { data: chartStats, isLoading, isError } = useGetChartStatsQuery();

  if (isError) return <p>Something Went Wrong !</p>;
  if (isLoading) return <LoadingSpinner />;

  const statusData: StatusDistribution[] =
    chartStats?.data?.statusDistribution || [];
  const monthlyData: MonthlyShipment[] =
    chartStats?.data?.monthlyShipments || [];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Pie Chart - Status Distribution */}
      <Card className="rounded-2xl shadow-md">
        <CardHeader>
          <CardTitle>Status Distribution</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={statusData as []}
                dataKey="count"
                nameKey="status"
                cx="50%"
                cy="50%"
                outerRadius={100}
                label
              >
                {statusData.map((_, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Bar Chart - Monthly Shipments */}
      <Card className="rounded-2xl shadow-md">
        <CardHeader>
          <CardTitle>Monthly Shipments</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={monthlyData}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="count" fill="#0088FE" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}
