import sinon from 'sinon';

describe('DateSelectorController', () => {
  let controller;
  const onDateChangeSpy = sinon.spy();

  beforeEach(angular.mock.module('cheapFlight', 'cheapFlight-test'));

  beforeEach(inject((_$componentController_) => {
    controller = _$componentController_('dateSelector', {}, {
      initDate: '2018-07-27',
      onDateChange: onDateChangeSpy
    });
  }));

  it('should init the component', () => {
    controller.$onInit();

    expect(controller.onDateChange.calledWith({ date: '2018-07-27' })).to.be.true;
  });
});
