import { apiSlice } from '../api/apiSlice'

export const postApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: (params) => ({
        url: `/posts?page=${params?.page ? params.page : 1}&limit=${
          params?.limit ? params.limit : 6
        }}`,
        method: 'GET',
      }),
      providesTags: ['Post'],
    }),
    createPost: builder.mutation({
      query: (body) => ({
        url: '/posts',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Post'],
    }),
  }),
})

export const { useCreatePostMutation, useGetPostsQuery } = postApiSlice
