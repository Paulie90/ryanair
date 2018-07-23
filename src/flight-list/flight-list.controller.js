import { DISPLAY_DATE_FORMAT } from '../app.constants';

export default class FlightListController {
  constructor($stateParams) {
    'ngInject';

    this.$stateParams = $stateParams;
    this.displayDateFormat = DISPLAY_DATE_FORMAT;
  }

  $onInit() {
    this.startAirport = this.airports.find(airport => airport.iataCode === this.$stateParams.startIata);
    this.endAirport = this.airports.find(airport => airport.iataCode === this.$stateParams.endIata);
  }
}
