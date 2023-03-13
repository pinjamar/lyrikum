import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const shazamCoreApi = createApi({
  reducerCoreApi: "shazamCoreApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://shazam.p.rapidapi.com",
    prepareHeaders: (headers) => {
      headers.set(
        "X-RapidAPI-Key",
        "0893922e6emsh1e2866108aa360cp10dd4bjsn38f5375262cf"
      );
      return headers;
    },
  }),

  endpoints: (builder) => ({
    getTopCharts: builder.query({ query: () => "/charts/track" }),
  }),
});

export const { useGetTopChartsQuery } = shazamCoreApi;
