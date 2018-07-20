export default class AirportPickerController {
  inputChangeHandler(query) {
    const foundAirport = this.airports.find(element => element.name === query);

    if (foundAirport) {
      this.onAirportSelect({ airport: foundAirport });
    } else {
      this.availableAirports = this.airports.filter(airport => airport.name.toLowerCase().includes(query.toLowerCase()))
        .slice(0, 15);
    }
  }
}
