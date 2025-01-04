import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const authApi = createApi({
    reducerPath: "authApi",
    baseQuery: fetchBaseQuery({
        baseUrl: `${import.meta.env.VITE_BACKEND_URL}/api/auth`,
        credentials: "include"
    }),
    endpoints: (builder) => {
        return {
            adminSignin: builder.mutation({
                query: userData => {
                    return {
                        url: "/login-admin",
                        method: "POST",
                        body: userData
                    }
                },

            }),
            adminVerifyOtp: builder.mutation({
                query: userData => {
                    return {
                        url: "/verify-admin-otp",
                        method: "POST",
                        body: userData
                    }
                },
                transformResponse: data => {
                    localStorage.setItem("zomato-admin", JSON.stringify(data.result))
                    return data.result
                }
            }),
            adminSignout: builder.mutation({
                query: userData => {
                    return {
                        url: "/logout-admin",
                        method: "POST",
                        // body: userData
                    }
                },
                transformResponse: data => {
                    localStorage.removeItem("zomato-admin")
                    return data
                }

            }),

            resturantRegister: builder.mutation({
                query: userData => {
                    return {
                        url: "/register-resturant",
                        method: "POST",
                        body: userData
                    }
                },
            }),
            resturantSignin: builder.mutation({
                query: userData => {
                    return {
                        url: "/login-resturant",
                        method: "POST",
                        body: userData
                    }
                },
                transformResponse: data => {
                    localStorage.setItem("zomato-resturant", JSON.stringify(data.result))
                    return data.result
                }
            }),
            resturantSignout: builder.mutation({
                query: userData => {
                    return {
                        url: "/logout-resturant",
                        method: "POST",
                        //body: userData
                    }
                },
                transformResponse: data => {
                    localStorage.removeItem("zomato-resturant")
                    return data
                }
            }),

        }
    }
})

export const {
    useAdminSigninMutation,
    useAdminVerifyOtpMutation,
    useAdminSignoutMutation,

    useResturantRegisterMutation,
    useResturantSigninMutation,
    useResturantSignoutMutation
} = authApi
