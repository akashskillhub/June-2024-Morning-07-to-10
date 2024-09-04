export const todoReducer = (state = { notes: [] }, { type, payload }) => {
    switch (type) {
        case "ADD_TODO": return { notes: [...state.notes, payload] };
        case "DELETE_TODO": return { notes: state.notes.filter(item => item !== payload) };
        default: return state
    }
}