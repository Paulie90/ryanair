import template from './flight-list.component.html';
import controller from './flight-list.controller';

export const FlightListComponent = {
  bindings: {
    airports: '<',
    flights: '<'
  },
  template,
  controller
};
