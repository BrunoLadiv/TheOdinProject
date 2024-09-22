import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "http://192.168.1.19:3000/api/";
const testToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2ZTdhOGMxMmQyNjM1NTQ3YWE2MzQyNyIsImlhdCI6MTcyNjQ1ODA0OSwiZXhwIjoxNzI3MDYyODQ5fQ._wNrezxmT7P5LLhDRnM9QsPv9ojd8QA-OTW0tE5cw-4";
const baseQuery = fetchBaseQuery({
  baseUrl,
  credentials: "include",
  prepareHeaders: (headers) => {
    // const token = localStorage.getItem("token") || testToken;
    const token = testToken;
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery,
  // eslint-disable-next-line no-unused-vars
  endpoints: (builder) => ({}),
});
