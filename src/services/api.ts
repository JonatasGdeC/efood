import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Restaurante } from '../pages/Home'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood/restaurantes'
  }),
  endpoints: (builder) => ({
    getRestaurantes: builder.query<Restaurante[], void>({
      query: () => ''
    }),
    getPratos: builder.query<Restaurante, string>({
      query: (id) => `/${id}`
    })
  })
})

export const { useGetRestaurantesQuery, useGetPratosQuery } = api
export default api
