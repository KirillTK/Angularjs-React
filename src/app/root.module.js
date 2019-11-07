import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import angularLoadingBar from 'angular-loading-bar';
import {react2angular} from "react2angular";
import ngRedux from 'ng-redux';

// bootstrap
import {RootComponent} from './root.component';
// modules
import {CommonModule} from './components/common.module';
import './root.component.scss';
import {ReactTest} from "./ReactTest";
import {RootReducer} from "./redux";
import {StoreProvider} from "./redux/react-store-provider";

const MODULE_NAME = 'root';
const MODULE_IMPORTS = [
    uiRouter,
    angularLoadingBar,
    CommonModule,
    ngRedux
];


const testService = () =>    {
    function test() {
        console.log('here');
    }

    return {
        test,
    }
};


angular
    .module(MODULE_NAME, MODULE_IMPORTS)
    .config(($ngReduxProvider) => {
        $ngReduxProvider.createStoreWith(RootReducer,  [],window.__REDUX_DEVTOOLS_EXTENSION__ ? [window.__REDUX_DEVTOOLS_EXTENSION__()] : []);
    })
    .component(RootComponent.selector, RootComponent)
    .service('testService', testService)
    .component('reactTest', react2angular(ReactTest, ['nameTest'], ['testService']))
    .value('EventEmitter', payload => ({$event: payload}))
    .run(($transitions, cfpLoadingBar) => {
        'ngInject';

        $transitions.onStart({}, cfpLoadingBar.start);
        $transitions.onSuccess({}, cfpLoadingBar.complete);
    })
    .name;


