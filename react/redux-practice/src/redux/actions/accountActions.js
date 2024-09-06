import { DEPOSIT_MONEY, WIDRAW_ALL_MONEY, WIDRAW_MONEY } from "../constants/accountConstants"
import { reduxStore } from "../store"

export const depositMoney = arg => {
    reduxStore.dispatch({ type: DEPOSIT_MONEY, payload: arg })
}
export const widrawMoney = arg => {
    reduxStore.dispatch({ type: WIDRAW_MONEY, payload: arg })

}
export const widrawAllMoney = arg => {
    reduxStore.dispatch({ type: WIDRAW_ALL_MONEY })
}