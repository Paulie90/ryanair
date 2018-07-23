export default class AirportWrapperController {
  $onInit() {
    this.startAirports = this.airports.slice();
    this.endAirports = this.airports.slice();
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
