import { apiSlice } from "../api/apiSlice";

export const postApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addComment: builder.mutation({
      query: (data) => ({
        url: `/posts/${data.slug}/comments`,
        method: "POST",
        body: { content: data.content, author: data.author },
      }),
      invalidatesTags: ["Blog"],
    }),

    getPost: builder.query({
      query: (param) => ({
        url: `/posts/${param.slug}`,
        method: "GET",
      }),
      providesTags: ["Blog"],
    }),
    getTags: builder.query({
      query: () => ({
        url: `/tags`,
        method: "GET",
      }),
    }),
    getPosts: builder.query({
      query: (params) => ({
        url: `/posts?page=${params?.page ? params.page : 1}&limit=${
          params?.limit ? params.limit : ""
        }}${params.tag ? `&tag=${encodeURIComponent(params.tag)}` : ""}`,
        method: "GET",
      }),
      providesTags: ["Post"],
    }),
    createPost: builder.mutation({
      query: (body) => ({
        url: "/posts",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Post"],
    }),
    updatePost: builder.mutation({
      query: (body) => ({
        url: "/posts",
        method: "PUT",
        body,
      }),
      invalidatesTags: ["Blog"],
    }),
    deletePost: builder.mutation({
      query: (param) => ({
        url: `/posts/${param.slug}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Post"],
    }),
  }),
});

export const {
  useUpdatePostMutation,
  useCreatePostMutation,
  useGetPostsQuery,
  useDeletePostMutation,
  useGetPostQuery,
  useGetTagsQuery,
  useAddCommentMutation,
} = postApiSlice;
