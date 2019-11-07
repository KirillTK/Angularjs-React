import { TODOS } from './constants';

const initialState = ['1231232', '123'];

export function TodosReducer(state = initialState, action) {
    switch(action.type) {
        case TODOS.ADD_TODO:
            console.log({action});
            return [...state, action.payload];
        case TODOS.REMOVE_TODO:
            return [
                ...state.slice(0, action.payload),
                ...state.slice(action.payload + 1)
            ];
        default:
            return state;
    }
}