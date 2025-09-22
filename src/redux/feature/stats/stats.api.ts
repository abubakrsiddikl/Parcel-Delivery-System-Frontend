import { baseApi } from "@/redux/baseApi";
import type { IChartStats, IResponse, IStats } from "@/types";

export const statsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // get stats
    getDashboardStats: builder.query<
      IResponse<IStats>,
      Record<string, unknown> | void
    >({
      query: () => ({
        url: "/stats",
        method: "GET",
      }),
      providesTags: ["STATS"],
    }),
    // get chartStats
    getChartStats: builder.query<
      IResponse<IChartStats>,
      Record<string, unknown> | void
    >({
      query: () => ({
        url: "/stats/charts",
        method: "GET",
      }),
      providesTags: ["STATS"],
    }),
  }),
});

export const { useGetDashboardStatsQuery, useGetChartStatsQuery } = statsApi;
