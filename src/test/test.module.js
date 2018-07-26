import angular from 'angular';
import { AIRPORT_API_URL_BASE } from '../services/services.consts';

export default angular.module('cheapFlight-test', [])
  .run(($httpBackend) => {
    $httpBackend.whenGET(AIRPORT_API_URL_BASE).respond([]);
  })
  .name;
