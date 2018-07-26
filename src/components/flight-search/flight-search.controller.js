import { MOMENT_SERVER_DATE_FORMAT } from '../../app.constants';

export default class FlightSearchController {
  constructor($state) {
    'ngInject';

    this.$state = $state;
  }

  setAirportsHandler(startAirport, endAirport) {
    this.startAirport = startAirport;
    this.endAirport = endAirport;
  }

  setDatesHandler(startDate, endDate) {
    this.startDate = startDate;
    this.endDate = endDate;
  }

  searchFlights() {
    const params = {
      startDate: this.startDate.format(MOMENT_SERVER_DATE_FORMAT),
      startIata: this.startAirport.iataCode,
      startAirport: this.startAirport,
      endDate: this.endDate.format(MOMENT_SERVER_DATE_FORMAT),
      endIata: this.endAirport.iataCode,
      endAirport: this.endAirport
    };

    this.$state.go('home.flight-list', params);
  }
}
