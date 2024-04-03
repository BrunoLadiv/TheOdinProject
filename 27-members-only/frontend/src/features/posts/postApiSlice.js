import { apiSlice } from '../api/apiSlice'

export const postApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: (params) => ({
        url: `/posts?page=${params?.page ? params.page : 1}&limit=${
          params?.limit ? params.limit : ''
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
    deletePost: builder.mutation({
      query: (id) => ({
        url: `/posts/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Post'],
    }),
  }),
})

export const { useCreatePostMutation, useGetPostsQuery, useDeletePostMutation } = postApiSlice
