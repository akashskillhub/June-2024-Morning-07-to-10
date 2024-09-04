import { DEC, INC } from "../constants/counterContstants"
import { reduxStore } from "../store"

export const inc = () => {
    reduxStore.dispatch({ type: INC, payload: 1 })
}
export const dec = () => {
    reduxStore.dispatch({ type: DEC, payload: 1 })
}