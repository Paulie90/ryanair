import angular from 'angular';

import { FlightSearchComponent } from './flight-search/flight-search.component';
import { AirportSelectorComponent } from './airport-selector/airport-selector.component';
import { DateWrapperComponent } from './date-wrapper/date-wrapper.component';
import { DateSelectorComponent } from './date-selector/date-selector.component';

export default angular.module('app.components', [])
  .component('flightSearch', FlightSearchComponent)
  .component('airportSelector', AirportSelectorComponent)
  .component('dateWrapper', DateWrapperComponent)
  .component('dateSelector', DateSelectorComponent)
  .name;
