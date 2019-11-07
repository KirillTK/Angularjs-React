import React from 'react';
import {Provider} from 'react-redux';
import {combineReducers, createStore} from 'redux';
import {RootReducer} from "./index";
import {ReactTest} from "../ReactTest";
import {createBrowserHistory} from 'history';
import {ConnectedRouter, connectRouter} from 'connected-react-router';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

export const history = createBrowserHistory();

const store = createStore(combineReducers({
    RootReducer,
    router: connectRouter(history),
}));


export const StoreProvider = () => {
    console.log(store, 'store')
    return (<Provider store={store}>
        <ConnectedRouter history={history}>
            <Router>
                <Switch>
                    <Route exact path="/app" component={ReactTest}/>
                </Switch>
            </Router>
        </ConnectedRouter>
    </Provider>)
};
