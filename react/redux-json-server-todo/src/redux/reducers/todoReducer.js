import { TODO_ADD_FAIL, TODO_ADD_SUCCESS, TODO_DELETE_FAIL, TODO_DELETE_SUCCESS, TODO_GET_FAIL, TODO_GET_SUCCESS, TODO_UPDATE_FAIL, TODO_UPDATE_SUCCESS } from "../constatnts/todoConstants"

export const todoReducer = (state = { todos: [] }, { type, payload }) => {
    switch (type) {
        case TODO_ADD_SUCCESS: return { ...state, todoCreate: !state.todoCreate }
        case TODO_ADD_FAIL: return { ...state, error: payload }

        case TODO_GET_SUCCESS: return { ...state, todos: payload }
        case TODO_GET_FAIL: return { ...state, error: payload }

        case TODO_UPDATE_SUCCESS: return { ...state, todoUpdate: !state.todoUpdate }
        case TODO_UPDATE_FAIL: return { ...state, error: payload }

        case TODO_DELETE_SUCCESS: return { ...state, todoDelete: !state.todoDelete }
        case TODO_DELETE_FAIL: return { ...state, error: payload }

        default: return state
    }
}