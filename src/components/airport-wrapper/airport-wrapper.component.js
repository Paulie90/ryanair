import template from './airport-wrapper.component.html';
import controller from './airport-wrapper.controller';

export const AirportWrapperComponent = {
  bindings: {
    airports: '<',
    routes: '<',
    onAirportsSet: '&'
  },
  template,
  controller
};
