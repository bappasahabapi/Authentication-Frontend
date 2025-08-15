// import { baseApi } from "@/redux/api/baseApi";

// // https://api.zsimarketing.com/api/auth/user/login
// // const AUTH_URL = "/auth/user";
// const AUTH_URL = "/auth/local";

// export const authApi = baseApi.injectEndpoints({
//   endpoints: (build) => ({
//     login: build.mutation({
//       query: (userInfo) => ({
//         url: `${AUTH_URL}/login`,
//         method: "POST",
//         body: userInfo,
//       }),
//     }),
//   }),
// });

// export const { useLoginMutation } = authApi;



// src/redux/features/auth/authApi.ts
import { baseApi } from "@/redux/api/baseApi";

type LoginRequest = { identifier: string; password: string };
type LoginResponse = { jwt: string; user: any };

export const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation<LoginResponse, LoginRequest>({
      query: (body) => ({
        url: "/auth/local",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useLoginMutation } = authApi;
