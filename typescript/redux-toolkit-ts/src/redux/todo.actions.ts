import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Note } from "../types/Todo";

export const getTodos = createAsyncThunk(
    "getTodos",
    async (userData, { rejectWithValue }) => {
        try {
            const { data } = await axios.get("http://localhost:5000/todos")
            return data
        } catch (error: any) {
            return rejectWithValue(error.message || "something went wrong")
        }
    })

export const createTodo = createAsyncThunk(
    "createTodo",
    async (todoData: Note, { rejectWithValue }) => {
        try {
            const { data } = await axios.post("http://localhost:5000/todos", todoData)
            return data
        } catch (error: any) {
            return rejectWithValue(error.message || "something went wrong")
        }
    })

export const updateTodo = createAsyncThunk(
    "updateTodo",
    async (todoData: Note, { rejectWithValue }) => {
        try {
            const { data } = await axios.put(`http://localhost:5000/todos/${todoData._id}`, todoData)
            return data
        } catch (error: any) {
            return rejectWithValue(error.message || "something went wrong")
        }
    })

export const deleteTodo = createAsyncThunk(
    "deleteTodo",
    async (id: number, { rejectWithValue }) => {
        try {
            const { data } = await axios.delete(`http://localhost:5000/todos/${id}`)
            return data
        } catch (error: any) {
            return rejectWithValue(error.message || "something went wrong")
        }
    })