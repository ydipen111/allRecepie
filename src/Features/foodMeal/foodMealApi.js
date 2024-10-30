import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const foodMealApi = createApi({
  reducerPath: 'foodMealApi',

  baseQuery: fetchBaseQuery({
    baseUrl: 'https://www.themealdb.com/api/json/v1/1'
  }),

  endpoints: (builder) => ({

    getFoodMeal: builder.query({
      query: () => ({
        url: '/categories.php',
        method: 'GET'

      }),
    }),

    getFoodCata: builder.query({
      query: (category) => ({
        url: '/filter.php',
        params: {
          c: category
        },
        method: 'GET'
      })
    })

  }),



})

export const { useGetFoodMealQuery, useGetFoodCataQuery } = foodMealApi;