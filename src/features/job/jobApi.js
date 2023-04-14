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
    getJobs: builder.query({
      query: () => ({
        url: "/jobs/all",
      }),
    }),
    jobById: builder.query({
      query: (id) => ({
        url: `/jobs/${id}`,
      }),
    }),
  }),
});

export const { usePostJobMutation, useGetJobsQuery, useJobByIdQuery } = jobApi;
