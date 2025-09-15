import { baseApi } from "@/redux/baseApi";
import type { IResponse, IUser } from "@/types";
import type { IUserPayload } from "@/types/auth.type";

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation<IResponse<IUser>, IUserPayload>({
      query: (userInfo) => ({
        url: "/user/register",
        method: "POST",
        data: userInfo,
      }),
    }),
    // login
    login: builder.mutation<IResponse<IUser>, Partial<IUserPayload>>({
      query: (userInfo) => ({
        url: "/auth/login",
        method: "POSt",
        data: userInfo,
      }),
    }),
    // get profile
    getUserProfile: builder.query<IResponse<IUser>, void>({
      query: () => ({
        url: "/user/me",
        method: "GET",
      }),
    }),
    // logout
    logout: builder.mutation({
      query: () => ({
        url: "/auth/logout",
        method: "POST",
      }),
    }),
  }),
});

export const {
  useRegisterMutation,
  useLoginMutation,
  useGetUserProfileQuery,
  useLogoutMutation,
} = authApi;
