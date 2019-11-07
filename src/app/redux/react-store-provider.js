import React from 'react';
import {Provider} from 'react-redux';
import {ReactTest} from "../ReactTest";
import {createBrowserHistory} from 'history';
import { history } from './index.js'
import {ConnectedRouter} from 'connected-react-router';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


export const StoreProvider = ({store}) => {
    return (<Provider store={store}>
        <ConnectedRouter history={history}>
            <Router>
                <Switch>
                    <Route exact path="/app" component={ReactTest}/>
                    <Route exact path="/app2" component={ReactTest}/>
                </Switch>
            </Router>
        </ConnectedRouter>
    </Provider>)
};
