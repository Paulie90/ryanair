import template from './flight-list.component.html';
import controller from './flight-list.controller';
import './flight-list.component.scss';

export const FlightListComponent = {
  bindings: {
    airports: '<',
    flights: '<'
  },
  template,
  controller
};
