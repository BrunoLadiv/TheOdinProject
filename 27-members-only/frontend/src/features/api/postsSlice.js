import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const postsSlice = createApi({
  reducerPath: 'postsApiSlice',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/api' }),
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => '/posts',
    }),
  }),
})

export const { useGetPostsQuery } = postsSlice
