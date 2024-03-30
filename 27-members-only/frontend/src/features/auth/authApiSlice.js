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
    becomeMember: builder.mutation({
      query: (body) => ({
        url: '/auth/become-member',
        method: 'POST',
        body,
      }),
    }),
  }),
})

export const {
  useLoginMutation,
  useRegisterMutation,
  useGetByIdQuery,
  useBecomeMemberMutation,
} = authApiSlice
