// import { } from "redux"

const { createStore } = require("redux")

// reducer
const rootReducer = (state = { balance: 100 }, action) => {
    if (action.type === "widraw") {
        return { balance: state.balance - action.payload }
    }
    if (action.type === "deposit") {
        return { balance: state.balance + action.payload }
    }
}

// store
const store = createStore(rootReducer)

// action
store.dispatch({ type: "widraw", payload: 5 })
console.log(store.getState())
store.dispatch({ type: "deposit", payload: 500 })
console.log(store.getState())

