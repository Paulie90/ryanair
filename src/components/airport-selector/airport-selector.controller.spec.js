import sinon from 'sinon';

import { mockedAirports } from '../../test/test.constants';

describe('AirportSelectorController', () => {
  let controller;
  const onAirportSelectSpy = sinon.spy();

  beforeEach(angular.mock.module('cheapFlight', 'cheapFlight-test'));

  beforeEach(inject((_$componentController_) => {
    controller = _$componentController_('airportSelector', {}, {
      initAirport: mockedAirports.airports[0],
      airports: mockedAirports.airports,
      onAirportSelect: onAirportSelectSpy
    });
  }));

  it('should init the component', () => {
    const airportChangeHandlerSpy = sinon.spy(controller, 'airportChangeHandler');

    controller.$onInit();

    expect(airportChangeHandlerSpy.calledWith(mockedAirports.airports[0])).to.be.true;
  });

  describe('Method: inputFocusHandler', () => {
    it('should reset the input text and open the dropdown', () => {
      controller.inputFocusHandler();

      expect(controller.isDropdownOpen).to.be.true;
      expect(controller.query).to.equal('');
    });
  });

  describe('Method: airportChangeHandler', () => {
    it('should close the dropdown, set name in input text and call the callback', () => {
      controller.airportChangeHandler(mockedAirports.airports[1]);

      expect(controller.isDropdownOpen).to.be.false;
      expect(controller.query).to.equal('Agadir');
      expect(controller.onAirportSelect.calledWith({ airport: mockedAirports.airports[1] })).to.be.true;
    });
  });

  describe('Method: filterAirports', () => {
    let result;

    it('should return true if there is no query', () => {
      result = controller.filterAirports();

      expect(result).to.be.true;
    });

    it('should return true, as the airport matches the query', () => {
      result = controller.filterAirports('Aga')(mockedAirports.airports[1]);

      expect(result).to.be.true;
    });

    it('should return false, as the airport not matches the query', () => {
      result = controller.filterAirports('Aga')(mockedAirports.airports[0]);

      expect(result).to.be.false;
    });
  });
});
