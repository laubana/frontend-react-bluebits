import { SignInResponse } from "../types/SignInResponse";
import { RefreshResponse } from "../types/RefreshResponse";
import { SignInRequest } from "../types/SignInRequest";
import { SignUpResponse } from "../types/SignUpResponse";
import { apiSlice } from "./apiSlice";

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    signUp: builder.mutation<void, SignUpResponse>({
      query: (body) => ({
        url: `/auth/sign-up`,
        method: "POST",
        body,
      }),
    }),
    signIn: builder.mutation<SignInResponse, SignInRequest>({
      query: (body) => ({
        url: `/auth/sign-in`,
        method: "POST",
        body,
      }),
    }),
    refresh: builder.mutation<RefreshResponse, void>({
      query: () => ({
        url: `/auth/refresh`,
        method: "GET",
      }),
    }),
    signOut: builder.mutation({
      query: () => ({
        url: `/auth/sign-out`,
        method: "POST",
      }),
    }),
  }),
});

export const { useSignUpMutation, useSignInMutation, useRefreshMutation } =
  authApiSlice;
