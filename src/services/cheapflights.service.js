import { FLIGHTS_API_URL_BASE } from './services.consts';

export default class CheapFlightsService {
  constructor($http) {
    'ngInject';

    this.$http = $http;
  }

  getFlights(startDate, startIata, endDate, endIata) {
    const apiUrl = `${FLIGHTS_API_URL_BASE}from/${startIata}/to/${endIata}/${startDate}/${endDate}/250/unique/`;

    return this.$http.get(apiUrl);
  }
}
