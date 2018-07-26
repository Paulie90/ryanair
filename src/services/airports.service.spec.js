import { AIRPORT_API_URL_BASE } from './services.consts';
import { mockedAirports } from '../test/test.constants';

describe('AirportsService', () => {
  let $httpBackend;
  let AirportsService;

  beforeEach(angular.mock.module('cheapFlight', 'cheapFlight-test'));

  beforeEach(inject((_$httpBackend_, _AirportsService_) => {
    $httpBackend = _$httpBackend_;
    AirportsService = _AirportsService_;
  }));

  afterEach(() => {
    $httpBackend.flush();
  });

  describe('Method: getAirports', () => {
    beforeEach(() => {
      $httpBackend.when('GET', AIRPORT_API_URL_BASE).respond(mockedAirports);

      AirportsService.getAirports();
    });

    it('should send the GET request', () => {
      expect($httpBackend.expectGET(AIRPORT_API_URL_BASE));
    });
  });
});
