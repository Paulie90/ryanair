import { mockedStateParams, mockedAirports } from '../test/test.constants';
import { DISPLAY_DATE_FORMAT } from '../app.constants';

describe('FlightListController', () => {
  let controller;

  beforeEach(angular.mock.module('cheapFlight', 'cheapFlight-test'));

  beforeEach(inject((_$componentController_) => {
    controller = _$componentController_('flightListPage',
      {
        $stateParams: mockedStateParams
      },
      {
        routes: mockedAirports.routes,
        airports: mockedAirports.airports
      });
  }));

  it('should init the component', () => {
    controller.$onInit();

    expect(controller.displayDateFormat).to.equal(DISPLAY_DATE_FORMAT);
    expect(controller.startAirport).to.equal(mockedAirports.airports[0]);
    expect(controller.endAirport).to.equal(mockedAirports.airports[1]);
  });
});
