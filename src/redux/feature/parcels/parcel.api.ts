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

    // update parcel status
    updateParcelStatus: builder.mutation<
      IResponse<IParcel>,
      { id: string; newStatus: string }
    >({
      query: ({ id, newStatus }) => ({
        url: `/parcels/${id}/status`,
        method: "PATCH",
        data: { newStatus },
      }),
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

    // get single parcel
    getSingleParcel: builder.query<IResponse<IParcel>, string>({
      query: (parcelId) => ({
        url: `/parcels/${parcelId}`,
        method: "GET",
      }),
      providesTags: ["PARCELS"],
    }),

    // parcel track
    trackParcel: builder.query<IResponse<IParcel>, string>({
      query: (trackingId) => ({
        url: `/parcels/track/${trackingId}`,
        method: "GET",
      }),
      providesTags: ["PARCELS"],
    }),

  }),
});

export const {
  useCreateParcelsMutation,
  useUpdateParcelStatusMutation,
  useGetAllParcelsQuery,
  useGetMyParcelQuery,
  useGetSingleParcelQuery,
  useTrackParcelQuery,
} = parcelsApi;
