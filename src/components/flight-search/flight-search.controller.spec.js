import moment from 'moment';
import sinon from 'sinon';

import { MOMENT_SERVER_DATE_FORMAT } from '../../app.constants';
import { mockedAirports } from '../../test/test.constants';

describe('FlightSearchController', () => {
  let controller;

  beforeEach(angular.mock.module('cheapFlight', 'cheapFlight-test'));

  beforeEach(inject((_$componentController_, _$state_) => {
    controller = _$componentController_('flightSearch',
      {
        $state: _$state_
      },
      {
        routes: mockedAirports.routes,
        airports: mockedAirports.airports
      });
  }));

  describe('Method: setAirportsHandler', () => {
    const mockedStartAirport = mockedAirports.airports[0];
    const mockedEndAirport = mockedAirports.airports[1];

    beforeEach(() => {
      controller.setAirportsHandler(mockedStartAirport, mockedEndAirport);
    });

    it('should set the airport variables', () => {
      expect(controller.startAirport).to.deep.equal(mockedStartAirport);
      expect(controller.endAirport).to.deep.equal(mockedEndAirport);
    });
  });

  describe('Method: setDatesHandler', () => {
    const startDate = moment();
    const endDate = moment().add(2, 'd');

    beforeEach(() => {
      controller.setDatesHandler(startDate, endDate);
    });

    it('should set the date variables', () => {
      expect(controller.startDate).to.equal(startDate);
      expect(controller.endDate).to.equal(endDate);
    });
  });

  describe('Method: searchFlights', () => {
    let stateSpy;
    const mockedStartDate = moment();
    const mockedEndDate = moment().add(2, 'd');
    const mockedStartAirport = mockedAirports.airports[0];
    const mockedEndAirport = mockedAirports.airports[1];
    const mockedParams = {
      startDate: mockedStartDate.format(MOMENT_SERVER_DATE_FORMAT),
      startIata: mockedStartAirport.iataCode,
      startAirport: mockedStartAirport,
      endDate: mockedEndDate.format(MOMENT_SERVER_DATE_FORMAT),
      endIata: mockedEndAirport.iataCode,
      endAirport: mockedEndAirport
    };

    beforeEach(() => {
      controller.startDate = mockedStartDate;
      controller.endDate = mockedEndDate;
      controller.startAirport = mockedStartAirport;
      controller.endAirport = mockedEndAirport;
      stateSpy = sinon.spy(controller.$state, 'go');

      controller.searchFlights();
    });

    it('should set the ', () => {
      expect(stateSpy.calledWith('home.flight-list', mockedParams)).to.be.true;
    });
  });
});
