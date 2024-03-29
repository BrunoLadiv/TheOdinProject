import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/api' }),
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => '/posts',
    }),
    getUserById: builder.query({
      query: (userId) => `/auth/user/${userId}`,
    }),
    userLogin: builder.mutation({
      query: (body) => ({
        url: '/auth/login',
        method: 'POST',
        body,
      }),
    }),
    userRegister: builder.mutation({
      query: (body) => ({
        url: '/auth/register',
        method: 'POST',
        body,
      }),
    }),
  }),
})

export const {
  useGetPostsQuery,
  useGetUserByIdQuery,
  useUserLoginMutation,
  useUserRegisterMutation,
} = api
