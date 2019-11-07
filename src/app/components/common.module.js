import angular from 'angular';

// containers
import {AppComponent} from './app.component';
// components
import {AppNavComponent} from './app-nav/app-nav.component';

// styles
import './app-nav/app-nav.component.scss';
import {ReduxComponent} from "../redux-component/controller";

const MODULE_NAME = 'common';
const MODULE_IMPORTS = [];

export const CommonModule = angular
    .module(MODULE_NAME, MODULE_IMPORTS)
    .component(AppComponent.selector, AppComponent)
    .component(AppNavComponent.selector, AppNavComponent)
    .component(ReduxComponent.selector, ReduxComponent)
     .config(($stateProvider, $locationProvider, $urlRouterProvider) => {
        'ngInject';

        $stateProvider
            .state(AppComponent.selector, {
                url: `/${AppComponent.selector}`,
                component: AppComponent.selector,
                data: {
                    requiredAuth: true
                }
            });

        $locationProvider.hashPrefix('');
        $locationProvider.html5Mode(true);
        $urlRouterProvider.otherwise('/app');
    })
    .name;
