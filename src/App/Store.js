import { configureStore } from "@reduxjs/toolkit";
import { foodMealApi } from "../Features/foodMeal/foodMealApi";

export const store = configureStore({
  reducer: {
    [foodMealApi.reducerPath]: foodMealApi.reducer

  },
  // caching, polling, invalidation and others
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([foodMealApi.middleware])
})