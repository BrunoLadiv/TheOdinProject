import { apiSlice } from '../api/apiSlice'

export const postApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => ({
        url: '/posts',
        method: 'GET',
      }),
    }),
    createPost: builder.mutation({
      query: (body) => ({
        url: '/posts',
        method: 'POST',
        body,
      }),
    }),
  }),
})

export const { useCreatePostMutation, useGetPostsQuery } = postApiSlice
