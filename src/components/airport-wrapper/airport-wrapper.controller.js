export default class AirportWrapperController {
  constructor($stateParams) {
    'ngInject';

    this.$stateParams = $stateParams;
  }

  $onInit() {
    // Clone the arrays
    this.startAirports = this.airports.slice();
    this.endAirports = this.airports.slice();

    // Get initial input values from state params
    if (this.$stateParams.startIata) {
      this.initStartAirport = this.airports.find(port => port.iataCode === this.$stateParams.startIata);
    }
    if (this.$stateParams.endIata) {
      this.initEndAirport = this.airports.find(port => port.iataCode === this.$stateParams.endIata);
    }
  }

  selectedStartAirportHandler(airport) {
    this.startAirport = airport;

    this.endAirports = this.airports.slice();
    this.endAirports = this.endAirports.filter(port => port.name !== airport.name);

    if (this.endAirport) {
      this.onAirportsSet({
        startAirport: this.startAirport,
        endAirport: this.endAirport
      });
    }
  }

  selectedEndAirportHandler(airport) {
    this.endAirport = airport;

    this.startAirports = this.airports.slice();
    this.startAirports = this.endAirports.filter(port => port !== airport);

    if (this.startAirport) {
      this.onAirportsSet({
        startAirport: this.startAirport,
        endAirport: this.endAirport
      });
    }
  }
}
