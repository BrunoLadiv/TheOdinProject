import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseUrl = 'https://members-only-backend-ov7p.onrender.com/api'

const baseQuery = fetchBaseQuery({
  baseUrl,
  credentials: 'include',
  prepareHeaders: (headers) => {
    const token = localStorage.getItem('token')
    if (token) {
      headers.set('Authorization', `Bearer ${token}`)
    }
    return headers
  },
})

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery,
  // eslint-disable-next-line no-unused-vars
  endpoints: (builder) => ({}),
})
