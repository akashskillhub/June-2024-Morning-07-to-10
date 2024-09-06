import { combineReducers, createStore } from "redux";
import { accountReducer } from "./reducer/accountReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({
    account: accountReducer
})

export const reduxStore = createStore(rootReducer, {}, composeWithDevTools())