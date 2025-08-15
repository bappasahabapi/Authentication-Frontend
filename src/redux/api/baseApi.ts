import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi =createApi({
    reducerPath:'baseApi',
    baseQuery:fetchBaseQuery({
        baseUrl:'https://strapi-store-server.onrender.com/api',
        credentials:'include'
    }),
    endpoints:()=>({})
})



