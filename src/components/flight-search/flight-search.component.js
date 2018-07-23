import template from './flight-search.component.html';
import controller from './flight-search.controller';
import './flight-search.component.scss';

export const FlightSearchComponent = {
  bindings: {
    airports: '<',
    onDateChange: '&'
  },
  template,
  controller
};
