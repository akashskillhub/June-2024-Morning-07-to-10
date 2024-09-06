import { applyMiddleware, combineReducers, createStore } from "redux";
import { todoReducer } from "./reducers/todoReducers";

import { composeWithDevTools } from "redux-devtools-extension"
import { thunk } from "redux-thunk";
const rootReducer = combineReducers({
    todos: todoReducer
})

export const reduxStore = createStore(
    rootReducer,
    {},
    composeWithDevTools(applyMiddleware(thunk))
)