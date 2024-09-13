import { createSlice } from "@reduxjs/toolkit";
import { addEmployee, deleteEmployees, getEmployees, updateEmployees } from "./employeeActions";

const employeeSlice = createSlice({
    name: "employeeSlice",
    initialState: {},
    reducers: {
        invalidate: (state, { payload }) => {
            payload.forEach(item => {
                state[item] = false
            })
        }
    },
    extraReducers: builder => builder
        .addCase(addEmployee.pending, (state, { payload }) => {
            state.loading = true
        })
        .addCase(addEmployee.fulfilled, (state, { payload }) => {
            state.loading = false
            state.createEmployee = !state.createEmployee
        })
        .addCase(addEmployee.rejected, (state, { payload }) => {
            state.loading = false
            state.error = payload
        })


        .addCase(getEmployees.pending, (state, { payload }) => {
            state.loading = true
        })
        .addCase(getEmployees.fulfilled, (state, { payload }) => {
            state.loading = false
            state.employees = payload
        })
        .addCase(getEmployees.rejected, (state, { payload }) => {
            state.loading = false
            state.error = payload
        })


        .addCase(updateEmployees.pending, (state, { payload }) => {
            state.loading = true
        })
        .addCase(updateEmployees.fulfilled, (state, { payload }) => {
            state.loading = false
            state.employeeUpdate = !state.employeeUpdate
        })
        .addCase(updateEmployees.rejected, (state, { payload }) => {
            state.loading = false
            state.error = payload
        })


        .addCase(deleteEmployees.pending, (state, { payload }) => {
            state.loading = true
        })
        .addCase(deleteEmployees.fulfilled, (state, { payload }) => {
            state.loading = false
            state.employeeDelete = !state.employeeDelete
        })
        .addCase(deleteEmployees.rejected, (state, { payload }) => {
            state.loading = false
            state.error = payload
        })

})

export const { invalidate } = employeeSlice.actions
export default employeeSlice.reducer