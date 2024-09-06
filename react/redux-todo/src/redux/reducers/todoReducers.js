import { TODO_CREATE, TODO_DELETE, TODO_READ, TODO_UPDATE } from "../constants/todoConstants";

export const todoReducer = (state = { allTodos: [] }, { type, payload }) => {

    switch (type) {
        case TODO_CREATE: return
        case TODO_READ: return { allTodos: payload }
        case TODO_UPDATE: return
        case TODO_DELETE: return
        default: return state
    }
} 