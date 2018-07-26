import { FLIGHTS_API_URL_BASE } from './services.consts';

describe('CheapFlightsService', () => {
  let $httpBackend;
  let CheapFlightsService;

  beforeEach(angular.mock.module('cheapFlight', 'cheapFlight-test'));

  beforeEach(inject((_$httpBackend_, _CheapFlightsService_) => {
    $httpBackend = _$httpBackend_;
    CheapFlightsService = _CheapFlightsService_;
  }));

  afterEach(() => {
    $httpBackend.flush();
  });

  describe('Method: getFlights', () => {
    beforeEach(() => {
      $httpBackend.when('GET', url => url.startsWith(FLIGHTS_API_URL_BASE)).respond([]);

      CheapFlightsService.getFlights('2018-07-10', 'AHO', '2018-07-31', 'OTP');
    });

    it('should send the GET request', () => {
      expect($httpBackend.expectGET(`${FLIGHTS_API_URL_BASE}from/AHO/to/OTP/2018-07-10/2018-07-31/250/unique/`));
    });
  });
});
