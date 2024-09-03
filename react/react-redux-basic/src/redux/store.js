import { combineReducers, createStore } from "redux"

// reducer
const accountReducer = (state = { balance: 500 }, action) => {
    if (action.type === "widraw") {
        return { balance: state.balance - action.payload }
    }
    if (action.type === "deposit") {
        return { balance: state.balance + action.payload }
    }
    return state
}
const rootReducer = combineReducers({
    account: accountReducer
})

// store
export const reduxStore = createStore(rootReducer)

// actions
export const widrawMoney = () => {
    reduxStore.dispatch({ type: "widraw", payload: 50 })
}
export const depositMoney = () => {
    reduxStore.dispatch({ type: "deposit", payload: 500 })
}
// reduxStore.getState()