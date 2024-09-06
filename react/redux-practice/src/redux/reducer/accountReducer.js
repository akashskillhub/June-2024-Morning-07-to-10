import { DEPOSIT_MONEY, WIDRAW_ALL_MONEY, WIDRAW_MONEY } from "../constants/accountConstants"

export const accountReducer = (state = { balance: 100 }, { type, payload }) => {

    switch (type) {
        case DEPOSIT_MONEY: return { balance: state.balance + payload }
        case WIDRAW_MONEY: return { balance: state.balance - payload }
        case WIDRAW_ALL_MONEY: return { balance: 0 }
        default: return state
    }
}