import { ADD_TEXT } from "./actions";

const initialState = {
    texts: localStorage.getItem("texts")
        ? JSON.parse(localStorage.getItem("texts"))
        : [],
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TEXT:
            const newState = {
                ...state,
                texts: [...state.texts, action.payload],
            };
            localStorage.setItem("texts", JSON.stringify(newState.texts));
            return newState;
        default:
            return state;
    }
};

export default rootReducer;
