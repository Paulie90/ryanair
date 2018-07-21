export default class AirportPickerController {
  inputChangeHandler(airport) {
    this.query = airport.name;
    this.isDropdownOpen = false;

    this.onAirportSelect({ airport });
  }

  filterAirports(query) {
    return airport => !!query && airport.name.toLowerCase().includes(query.toLowerCase());
  }
}
