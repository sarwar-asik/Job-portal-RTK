import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import mainApi from "../../shared/mainApi";
// import mainApi from "../../shared/mainApi";

const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: mainApi,
  }),
  endpoints: (builder) => ({}),
});

export default apiSlice;
