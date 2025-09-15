import { baseApi } from "@/redux/baseApi";
import type { IResponse, IUser } from "@/types";
import type { IUserPayload } from "@/types/auth.type";

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // create user
    register: builder.mutation<IResponse<IUser>, IUserPayload>({
      query: (userInfo) => ({
        url: "/user/register",
        method: "POST",
        data: userInfo,
      }),
      invalidatesTags: ["USER"],
    }),
    // login
    login: builder.mutation<IResponse<IUser>, Partial<IUserPayload>>({
      query: (userInfo) => ({
        url: "/auth/login",
        method: "POSt",
        data: userInfo,
      }),
      invalidatesTags: ["USER"],
    }),
    // get user profile
    getUserProfile: builder.query<IResponse<IUser>, void>({
      query: () => ({
        url: "/user/me",
        method: "GET",
      }),
      providesTags: ["USER"],
    }),

    // get all users
    getAllUsers: builder.query<
      IResponse<IUser[]>,
      Record<string, unknown> | void
    >({
      query: (params) => ({
        url: "/user/all-users",
        method: "GET",
        params: params,
      }),
      providesTags: ["USER"],
    }),

    // update user
    updateUser: builder.mutation<
      IResponse<IUser>,
      { id: string; userInfo: Partial<IUser> }
    >({
      query: ({ id, userInfo }) => ({
        url: `/user/update/${id}`,
        method: "PATCH",
        data: userInfo,
      }),
      invalidatesTags: ["USER"],
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
  useUpdateUserMutation,
  useGetAllUsersQuery,
  useGetUserProfileQuery,
  useLogoutMutation,
} = authApi;
