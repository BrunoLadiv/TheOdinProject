import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "http://localhost:3000/api/";
const testToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2YTFiMWE1MzU3ZDY4MmNlZTRkNmJkMSIsImlhdCI6MTcyNDYxODQ1MiwiZXhwIjoxNzI1MjIzMjUyfQ.gz4ARRoDo4_YryVIZ_hvNPA-Xr3UY9DJI0KZNf_iiz4";
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
