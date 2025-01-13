import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const resturantApi = createApi({
    reducerPath: "resturantApi",
    baseQuery: fetchBaseQuery({
        baseUrl: `${import.meta.env.VITE_BACKEND_URL}/api/resturant`,
        credentials: "include"
    }),
    tagTypes: ["info"],
    endpoints: (builder) => {
        return {
            resturantUpdateInfo: builder.mutation({
                query: resturantData => {
                    return {
                        url: "/update-info",
                        method: "POST",
                        body: resturantData
                    }
                },
                transformResponse: data => {
                    const resto = JSON.parse(localStorage.getItem("zomato-resturant"))
                    resto.infoComplete = true
                    localStorage.setItem("zomato-resturant", JSON.stringify(resto))
                    return data
                },
                invalidatesTags: ["info"]
            }),
            resturantAddMenu: builder.mutation({
                query: resturantData => {
                    return {
                        url: "/add-menu",
                        method: "POST",
                        body: resturantData
                    }
                },
                invalidatesTags: ["menu"]
            }),
            resturantGetMenu: builder.query({
                query: resturantData => {
                    return {
                        url: "/get-menu",
                        method: "GET",
                    }
                },
                providesTags: ["menu"]
            }),
            resturantUpdateMenu: builder.mutation({
                query: resturantData => {
                    return {
                        url: "/update-menu/" + resturantData._id,
                        method: "PUT",
                        body: resturantData.fd,// 👈 cause image
                    }
                },
                invalidatesTags: ["menu"]
            }),
            resturantDeleteMenu: builder.mutation({
                query: _id => {
                    return {
                        url: "/delete-menu/" + _id,
                        method: "DELETE",
                        // body: resturantData.fd,// 👈 cause image
                    }
                },
                invalidatesTags: ["menu"]
            }),

        }
    }
})

export const {
    useResturantUpdateInfoMutation,
    useResturantAddMenuMutation,

    useResturantDeleteMenuMutation,
    useResturantUpdateMenuMutation,
    useResturantGetMenuQuery,
    useLazyResturantGetMenuQuery
} = resturantApi
