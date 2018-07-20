export default class FlightSerachController {
  constructor(AirportsService) {
    'ngInject';

    this.AirportsService = AirportsService;
  }

  $onInit() {
    this.AirportsService.getAirports().then((res) => {
      this.airports = res.data.airports;
    });
  }

  setAirportsHandler(startAirport, endAirport) {
    debugger
  }

  setDatesHandler(startDate, endDate) {
    this.startDate = startDate;
    this.endDate = endDate;
  }
}
