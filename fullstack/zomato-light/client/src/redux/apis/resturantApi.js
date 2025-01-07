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

        }
    }
})

export const { useResturantUpdateInfoMutation } = resturantApi
