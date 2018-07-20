import { AIRPORT_API_URL } from './services.consts';

export default class AirportsService {
  constructor($http) {
    'ngInject';

    this.$http = $http;
  }

  getAirports() {
    return this.$http.get(AIRPORT_API_URL);
  }
}
