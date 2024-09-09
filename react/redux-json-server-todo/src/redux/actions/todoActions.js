import { api } from "../../util/api"
import { TODO_ADD_FAIL, TODO_ADD_SUCCESS, TODO_DELETE_FAIL, TODO_DELETE_SUCCESS, TODO_GET_FAIL, TODO_GET_SUCCESS, TODO_UPDATE_FAIL, TODO_UPDATE_SUCCESS } from "../constatnts/todoConstants"

export const addTodo = todoData => async (dispatch, getState) => {
    try {
        const { data } = await api.post("/notes", todoData)
        dispatch({ type: TODO_ADD_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: TODO_ADD_FAIL, payload: error.message })
    }
}
export const getTodo = todoData => async (dispatch, getState) => {
    try {
        const { data } = await api.get("/notes")
        dispatch({ type: TODO_GET_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: TODO_GET_FAIL, payload: error.message })
    }
}
export const updateTodo = todoData => async (dispatch, getState) => {
    try {
        const { data } = await api.patch("/notes/" + todoData.id, todoData)
        dispatch({ type: TODO_UPDATE_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: TODO_UPDATE_FAIL, payload: error.message })
    }
}
export const deleteTodo = id => async (dispatch, getState) => {
    try {
        const { data } = await api.delete("/notes/" + id,)
        dispatch({ type: TODO_DELETE_SUCCESS })
    } catch (error) {
        dispatch({ type: TODO_DELETE_FAIL, payload: error.message })
    }
}