import { combineReducers } from 'redux';
import { TodosReducer }  from './reducer';
import { connectRouter} from 'connected-react-router';
import {createBrowserHistory} from "history";

export const history = createBrowserHistory();

export const RootReducer = combineReducers({
    todos: TodosReducer,
    router: connectRouter(history),
});
