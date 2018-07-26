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

    this.endAirports = this.airports.filter(port => this.routes[airport.iataCode].includes(port.iataCode));

    if (this.endAirport) {
      this.onAirportsSet({
        startAirport: this.startAirport,
        endAirport: this.endAirport
      });
    }
  }

  selectedEndAirportHandler(airport) {
    this.endAirport = airport;

    this.startAirports = this.airports.filter(port => port !== airport);

    if (this.startAirport) {
      this.onAirportsSet({
        startAirport: this.startAirport,
        endAirport: this.endAirport
      });
    }
  }
}
