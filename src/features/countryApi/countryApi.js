import { Api } from "../api/Api";

export const countryApi = Api.injectEndpoints({
  endpoints: (builder) => ({
    countryList: builder.query({
      query: (data) => ({
        url: "contacts/",
        method: "GET",
      }),
    }),
  }),
});
export const { useCountryListQuery } = countryApi;
