import { createStore, combineReducers, applyMiddleware } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import { todoReducer } from "./reducers/todoReducer"
import { thunk } from "redux-thunk"

const rootReducer = combineReducers({
    allTodos: todoReducer
})

const reduxStore = createStore(
    rootReducer,
    {},
    composeWithDevTools(applyMiddleware(thunk)))

export default reduxStore