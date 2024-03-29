import { apiSlice } from '../api/apiSlice'

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (body) => ({
        url: '/auth/login',
        method: 'POST',
        body,
      }),
    }),
    register: builder.mutation({
      query: (body) => ({
        url: '/auth/register',
        method: 'POST',
        body,
      }),
    }),
    getById: builder.query({
      query: (userId) => `/auth/user/${userId}`,
    }),
  }),
})

export const { useLoginMutation, useRegisterMutation, useGetByIdQuery } = authApiSlice
