import { DEC, INC } from "../constants/counterContstants";

export const counterReducer = (state = { count: 0 }, { type, payload }) => {
    switch (type) {
        case INC: return { count: state.count + payload }; break;
        case DEC: return { count: state.count - payload }; break;
        default: return state; break;
    }
}
