import apiSlice from "../api/apiSlice";

const jobApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    postJob: builder.mutation({
      query: (data) => ({
        method: "POST",
        url: "/jobs/addJob",
        body: data,
      }),
    }),
    
  }),
});

export const { usePostJobMutation } = jobApi;
