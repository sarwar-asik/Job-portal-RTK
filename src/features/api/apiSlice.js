import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query";
import mainApi from "../../shared/mainApi";

const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: mainApi,
  }),
  endpoints: (builder) => ({}),
});

export default apiSlice;
