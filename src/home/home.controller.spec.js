import { mockedAirports } from '../test/test.constants';

describe('HomeController', () => {
  let controller;

  beforeEach(angular.mock.module('cheapFlight', 'cheapFlight-test'));

  beforeEach(inject((_$componentController_) => {
    controller = _$componentController_('homePage',
      {},
      {
        airports: mockedAirports
      });
  }));

  it('should init the component', () => {
    controller.$onInit();

    expect(controller.airports).to.deep.equal(mockedAirports.airports);
    expect(controller.routes).to.deep.equal(mockedAirports.routes);
  });
});
