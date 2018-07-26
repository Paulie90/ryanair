import sinon from 'sinon';

import { mockedAirports, mockedStateParams } from '../../test/test.constants';

describe('AirportWrapperController', () => {
  let controller;
  const onAirportsSetSpy = sinon.spy();

  beforeEach(angular.mock.module('cheapFlight', 'cheapFlight-test'));

  beforeEach(inject((_$componentController_) => {
    controller = _$componentController_('airportWrapper',
      {
        $stateParams: mockedStateParams
      },
      {
        routes: mockedAirports.routes,
        airports: mockedAirports.airports,
        onAirportsSet: onAirportsSetSpy
      });
  }));

  it('should init the component', () => {
    controller.$onInit();

    expect(controller.startAirports).to.deep.equal(mockedAirports.airports);
    expect(controller.endAirports).to.deep.equal(mockedAirports.airports);
    expect(controller.initStartAirport).to.deep.equal(mockedAirports.airports[0]);
    expect(controller.initEndAirport).to.deep.equal(mockedAirports.airports[1]);
  });

  describe('Method: selectedStartAirportHandler', () => {
    it('should set the start airport and filter end airports to match the start airport\'s routes', () => {
      controller.selectedStartAirportHandler(mockedAirports.airports[0]);

      expect(controller.startAirport).to.deep.equal(mockedAirports.airports[0]);
      expect(controller.endAirports).to.deep.equal([mockedAirports.airports[1]]);
    });

    it('should set the start airport and filter end airports to match the start airport\'s routes and call callback', () => {
      controller.endAirport = mockedAirports.airports[1];
      controller.selectedStartAirportHandler(mockedAirports.airports[0]);

      expect(controller.startAirport).to.deep.equal(mockedAirports.airports[0]);
      expect(controller.endAirports).to.deep.equal([mockedAirports.airports[1]]);
      expect(controller.onAirportsSet.calledWith({
        startAirport: mockedAirports.airports[0],
        endAirport: mockedAirports.airports[1]
      })).to.be.true;
    });
  });

  describe('Method: selectedEndAirportHandler', () => {
    it('should set the end airport and filter start airports to skip the selected end airport', () => {
      controller.selectedEndAirportHandler(mockedAirports.airports[0]);

      expect(controller.endAirport).to.deep.equal(mockedAirports.airports[0]);
      expect(controller.startAirports).to.deep.equal([mockedAirports.airports[1]]);
    });

    it('should set the end airport and filter start airports to skip the selected end airport and call callback', () => {
      controller.startAirport = mockedAirports.airports[1];
      controller.selectedEndAirportHandler(mockedAirports.airports[0]);

      expect(controller.endAirport).to.deep.equal(mockedAirports.airports[0]);
      expect(controller.startAirports).to.deep.equal([mockedAirports.airports[1]]);
      expect(controller.onAirportsSet.calledWith({
        startAirport: mockedAirports.airports[0],
        endAirport: mockedAirports.airports[1]
      })).to.be.true;
    });
  });
});
