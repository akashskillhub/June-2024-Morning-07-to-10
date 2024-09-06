import { api } from "../../utils/api"
import { TODO_CREATE, TODO_READ } from "../constants/todoConstants"
import { reduxStore } from "../store"

export const addTodo = todoData => {
    // reduxStore.dispatch()
    return async () => {
        await api.post("/notes", todoData)
        console.log("todo create success")

    }
}
export const getAllTodo = () => {
    return async (dispatch) => {
        const { data } = await api.get("/notes")
        dispatch({ type: TODO_READ, payload: data })
    }
}
export const updateTodo = () => { }
export const deleteTodo = () => { }