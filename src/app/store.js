import { configureStore } from "@reduxjs/toolkit";
import { getDefaultNormalizer } from "@testing-library/react";
import apiSlice from "../features/api/apiSlice";
import authSlice from "../features/auth/authSlice";

const store = configureStore({
  devTools: true,
  [apiSlice.reducerPath]: apiSlice.reducer,
  reducer: {
    auth: authSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export default store;
