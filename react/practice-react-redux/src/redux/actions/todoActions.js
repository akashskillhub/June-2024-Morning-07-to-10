import { reduxStore } from "../store"

export const handleAddTodo = () => {
    reduxStore.dispatch({ type: "ADD_TODO", payload: "Learn Redux" })
}
export const handleDeleteTodo = () => {
    reduxStore.dispatch({ type: "DELETE_TODO", payload: "Learn Redux" })
} 