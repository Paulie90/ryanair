import angular from 'angular';
import uiRouter from 'angular-ui-router';

import config from './app.config';
import Components from './components/components.module';
import { HomeComponent } from './home/home.component';
import { FlightListComponent } from './flight-list/flight-list.component';
import {
  CheapFlightsService,
  AirportsService
} from './services';
import {
  ClickOutsideDirective
} from './directives';

angular.module('cheapFlight', [
  uiRouter,
  Components
])
  .component('homePage', HomeComponent)
  .component('flightListPage', FlightListComponent)
  .service('AirportsService', AirportsService)
  .service('CheapFlightsService', CheapFlightsService)
  .directive('clickOutside', ClickOutsideDirective)
  .config(config);
