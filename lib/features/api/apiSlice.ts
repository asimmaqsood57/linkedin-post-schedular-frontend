import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: process.env.NEXT_PUBLIC_API_URL,
  prepareHeaders: (headers) => {
    const token = localStorage.getItem("token");
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery,
  tagTypes: ["Post", "LinkedInAccount"],
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (credentials) => ({
        url: "/auth/register",
        method: "POST",
        body: credentials,
      }),
    }),
    login: builder.mutation({
      query: (credentials) => ({
        url: "/auth/login",
        method: "POST",
        body: credentials,
      }),
    }),
    generatePost: builder.mutation({
      query: (data) => ({
        url: "/posts/generate",
        method: "POST",
        body: data,
      }),
    }),
    createPost: builder.mutation({
      query: (data) => ({
        url: "/posts",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Post"],
    }),
    getPosts: builder.query({
      query: () => "/posts",
      providesTags: ["Post"],
    }),
    deletePost: builder.mutation({
      query: (id) => ({
        url: `/posts/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Post"],
    }),
    getLinkedInAuthUrl: builder.query({
      query: () => "/linkedin/auth-url",
    }),
    getLinkedInAccount: builder.query({
      query: () => "/linkedin/account",
      providesTags: ["LinkedInAccount"],
    }),
    disconnectLinkedIn: builder.mutation({
      query: () => ({
        url: "/linkedin/disconnect",
        method: "DELETE",
      }),
      invalidatesTags: ["LinkedInAccount"],
    }),
    publishPost: builder.mutation({
      query: (postId) => ({
        url: `/linkedin/publish/${postId}`,
        method: "POST",
      }),
      invalidatesTags: ["Post"],
    }),
  }),
});

export const {
  useRegisterMutation,
  useLoginMutation,
  useGeneratePostMutation,
  useCreatePostMutation,
  useGetPostsQuery,
  useDeletePostMutation,
  useGetLinkedInAuthUrlQuery,
  useGetLinkedInAccountQuery,
  useDisconnectLinkedInMutation,
  usePublishPostMutation,
} = apiSlice;