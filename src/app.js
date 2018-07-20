import angular from 'angular';
import uiRouter from 'angular-ui-router';

import Components from './components/components.module';
import { HomeComponent } from './home/home.component';
import { FlightListComponent } from './flight-list/flight-list.component';
import {
  CheapFlightService,
  AirportsService
} from './services';

angular.module('myApp', [
  uiRouter,
  Components
])
  .component('homePage', HomeComponent)
  .component('flightListPage', FlightListComponent)
  .service('AirportsService', AirportsService)
  .service('CheapFlightService', CheapFlightService)
  .config(($locationProvider, $urlRouterProvider, $stateProvider) => {
    'ngInject';

    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode(true);
    $stateProvider
      .state('home', {
        url: '/',
        component: 'homePage'
      })
      .state('home.flight-list', {
        url: 'flight-list',
        component: 'flightListPage'
      });
  });
