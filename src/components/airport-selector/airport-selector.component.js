import template from './airport-selector.component.html';
import controller from './airport-selector.controller';

export const AirportSelectorComponent = {
  bindings: {
    initAirport: '<?',
    airports: '<',
    onAirportSelect: '&'
  },
  template,
  controller
};
