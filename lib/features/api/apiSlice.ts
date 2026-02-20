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
  tagTypes: ["Post", "LinkedInAccount", "Schedule"],
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
    getPost: builder.query({
      query: (id) => `/posts/${id}`,
      providesTags: (_result, _error, id) => [{ type: "Post", id }],
    }),
    updatePost: builder.mutation({
      query: ({ id, data }) => ({
        url: `/posts/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: (_result, _error, { id }) => [
        { type: "Post", id },
        "Post",
      ],
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
    createSchedule: builder.mutation({
      query: (data) => ({
        url: "/schedules",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Schedule"],
    }),
    getSchedules: builder.query({
      query: () => "/schedules",
      providesTags: ["Schedule"],
    }),
    getSchedule: builder.query({
      query: (id) => `/schedules/${id}`,
      providesTags: ["Schedule"],
    }),
    updateSchedule: builder.mutation({
      query: ({ id, data }) => ({
        url: `/schedules/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Schedule"],
    }),
    deleteSchedule: builder.mutation({
      query: (id) => ({
        url: `/schedules/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Schedule"],
    }),
    toggleSchedule: builder.mutation({
      query: (id) => ({
        url: `/schedules/${id}/toggle`,
        method: "PATCH",
      }),
      invalidatesTags: ["Schedule"],
    }),
  }),
});

export const {
  useRegisterMutation,
  useLoginMutation,
  useGeneratePostMutation,
  useCreatePostMutation,
  useGetPostsQuery,
  useGetPostQuery,
  useUpdatePostMutation,
  useDeletePostMutation,
  useGetLinkedInAuthUrlQuery,
  useGetLinkedInAccountQuery,
  useDisconnectLinkedInMutation,
  usePublishPostMutation,
  useCreateScheduleMutation,
  useGetSchedulesQuery,
  useGetScheduleQuery,
  useUpdateScheduleMutation,
  useDeleteScheduleMutation,
  useToggleScheduleMutation,
} = apiSlice;