import { apiSlice } from '../api/apiSlice'

export const postApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getPost: builder.query({
      query: (param) => ({
        url: `/posts/${param.slug}`,
        method: 'GET',
      }),
    }),
    getTags: builder.query({
      query: () => ({
        url: `/tags`,
        method: 'GET',
      }),
    }),
    getPosts: builder.query({
      query: (params) => ({
        url: `/posts?page=${params?.page ? params.page : 1}&limit=${
          params?.limit ? params.limit : ''
        }}${params.tag ? `&tag=${encodeURIComponent(params.tag)}` : ''}`,
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

export const {
  useCreatePostMutation,
  useGetPostsQuery,
  useDeletePostMutation,
  useGetPostQuery,
  useGetTagsQuery,
} = postApiSlice
