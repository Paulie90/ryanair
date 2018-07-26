export default class AirportSelectorController {
  $onInit() {
    if (this.initAirport) {
      this.airportChangeHandler(this.initAirport);
    }
  }

  inputFocusHandler() {
    this.isDropdownOpen = true;
    this.query = '';
  }

  airportChangeHandler(airport) {
    this.query = airport.name;
    this.isDropdownOpen = false;

    this.onAirportSelect({ airport });
  }

  filterAirports(query) {
    if (!query) {
      return true;
    }

    return airport => airport.name.toLowerCase().includes(query.toLowerCase());
  }
}
