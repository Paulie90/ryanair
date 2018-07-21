import template from './flight-search.component.html';
import controller from './flight-search.controller';

export const FlightSearchComponent = {
  bindings: {
    airports: '<',
    onDateChange: '&'
  },
  template,
  controller
};
