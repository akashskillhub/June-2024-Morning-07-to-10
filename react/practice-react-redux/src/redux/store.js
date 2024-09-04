import { applyMiddleware, combineReducers, createStore } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import { counterReducer } from "./reducers/counterReducer"
import { todoReducer } from "./reducers/todoReducer"

// reducer

const rootReducer = combineReducers({
    counter: counterReducer,
    todos: todoReducer
})
// store
export const reduxStore = createStore(rootReducer, {}, composeWithDevTools())

// actions
