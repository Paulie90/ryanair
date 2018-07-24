export default class AirportPickerController {
  $onInit() {
    if (this.initAirport) {
      this.airportChangeHandler(this.initAirport);
    }
  }

  airportChangeHandler(airport) {
    this.query = airport.name;
    this.isDropdownOpen = false;

    this.onAirportSelect({ airport });
  }

  filterAirports(query) {
    return airport => !!query && airport.name.toLowerCase().includes(query.toLowerCase());
  }
}
