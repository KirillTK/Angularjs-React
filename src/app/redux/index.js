import { combineReducers } from 'redux';
import { TodosReducer }  from './reducer';

export const RootReducer = combineReducers({
    todos: TodosReducer
});
