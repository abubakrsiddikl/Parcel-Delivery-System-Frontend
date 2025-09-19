import { baseApi } from "@/redux/baseApi";
import type { IParcel, IParcelPayload, IResponse } from "@/types";

export const parcelsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // create parcel
    createParcels: builder.mutation<IResponse<IParcel>, IParcelPayload>({
      query: (parcelInfo) => ({
        url: "/parcels/create",
        method: "POST",
        data: parcelInfo,
      }),
      invalidatesTags: ["PARCELS"],
    }),

    // get all parcels
    getAllParcels: builder.query<
      IResponse<IParcel[]>,
      Record<string, unknown> | void
    >({
      query: (params) => ({
        url: "/parcels",
        method: "GET",
        params: params,
      }),
      providesTags: ["PARCELS"],
    }),

    // get my parcel sender and receiver
    getMyParcel: builder.query<IResponse<IParcel[]>, void>({
      query: (params) => ({
        url: "/parcels/me",
        method: "GET",
        params: params,
      }),
      providesTags: ["PARCELS"],
    }),
  }),
});

export const {
  useCreateParcelsMutation,
  useGetAllParcelsQuery,
  useGetMyParcelQuery,
} = parcelsApi;
