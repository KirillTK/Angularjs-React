import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {combineReducers, createStore} from 'redux';
import {RootReducer} from "./index";
import {ReactTest} from "../ReactTest";
import { createBrowserHistory } from 'history';
import {ConnectedRouter, connectRouter} from 'connected-react-router';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

export const history = createBrowserHistory();

const store = createStore(combineReducers({
    ...RootReducer,
    router: connectRouter(history),
}));


export const StoreProvider = () => {
    return (<Provider store={store}>
        <ConnectedRouter history={history}>
            <Router>
                <Switch>
                    <Router path='/app' component={ReactTest}/>
                    <Router path='/' component={ReactTest}/>
                </Switch>
            </Router>
        </ConnectedRouter>
    </Provider>)
};


// setTimeout(() => {
//     console.log('here', document.getElementsByClassName('root')[0]);
//     ReactDOM.render(<Provider store={store}>
//         <ConnectedRouter history={history}>
//             <Router>
//                 <Switch>
//                     <Router path='/app' component={ReactTest}/>
//                     <Router path='/' component={ReactTest}/>
//                 </Switch>
//             </Router>
//         </ConnectedRouter>
//     </Provider>, document.getElementsByClassName('root')[0]);
// }, 1000);
