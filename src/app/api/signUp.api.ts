import React from "react";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IBodyPOST, IResponseGoogle, IResponseShopifySuccess, IResponseShopifyFailure } from "./signUp.types";

export const signUpApi = createApi({
  reducerPath: "signUpApi",
  baseQuery: fetchBaseQuery({baseUrl: "https://vast-basin-98801.herokuapp.com"}),
  tagTypes: ['Post'],
  endpoints: (builder) => ({
    getShopify: builder.query<IResponseShopifySuccess | IResponseShopifyFailure, string>({
      query: (name: string) => `/shopify?name=${name}`
    }),
    getGoogle: builder.query<IResponseGoogle, void>({
      query: () => `/google`
    }),
    postRegister: builder.mutation<IBodyPOST, IBodyPOST>({
      query: (body: IBodyPOST) => ({
        url: `/register`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Post']
    }),
  })
})


export const { useGetShopifyQuery, useGetGoogleQuery, usePostRegisterMutation } = signUpApi;
