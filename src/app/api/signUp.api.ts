import React from "react";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IBodyPOST, IResponseGoogle, IResponseShopify } from "./signUp.types";

export const signUpApi = createApi({
  reducerPath: "signUpApi",
  baseQuery: fetchBaseQuery({baseUrl: "https://vast-basin-98801.herokuapp.com"}),
  tagTypes: ['Post'],
  endpoints: (builder) => ({
    getShopify: builder.query<IResponseShopify, string>({
      query: (name: string) => `/shopify?name=${name}`
    }),
    getGoogle: builder.query<IResponseGoogle, void>({
      query: () => `/google`
    }),
    postRegister: builder.mutation< IBodyPOST , Partial<IBodyPOST>>({
      query(body) {
        return {
          url: `/register`,
          method: 'POST',
          body,
      }},
      invalidatesTags: [{ type: 'Post', id: 'LIST' }]
    }),
  })
});

export const { useGetShopifyQuery, useGetGoogleQuery, usePostRegisterMutation } = signUpApi;
