import sinon from 'sinon';
import moment from 'moment';

import { mockedStateParams } from '../../test/test.constants';
import { MOMENT_SERVER_DATE_FORMAT } from '../../app.constants';

describe('DateWrapperController', () => {
  let controller;
  const onDatesSetSpy = sinon.spy();

  beforeEach(angular.mock.module('cheapFlight', 'cheapFlight-test'));

  beforeEach(inject((_$componentController_) => {
    controller = _$componentController_('dateWrapper',
      {
        $stateParams: mockedStateParams
      }, {
        onDatesSet: onDatesSetSpy
      });
  }));

  it('should init the component', () => {
    controller.$onInit();

    expect(controller.$stateParams.startDate).to.equal(mockedStateParams.startDate);
    expect(controller.$stateParams.endDate).to.equal(mockedStateParams.endDate);
  });

  describe('Method: startDateChanged', () => {
    let momentDate = moment('2018-07-11');

    it('should set the start and min date w/o calling callback', () => {
      controller.startDateChanged('2018-07-11');

      expect(controller.startDate).to.deep.equal(momentDate);
      expect(controller.minDate).to.deep.equal(momentDate.add(2, 'd').format(MOMENT_SERVER_DATE_FORMAT));
    });

    it('should set the start and min date w/ calling callback', () => {
      momentDate = moment('2018-07-11');
      controller.endDate = moment('2018-07-27');

      controller.startDateChanged('2018-07-11');

      expect(controller.startDate).to.deep.equal(momentDate);
      expect(controller.minDate).to.deep.equal(momentDate.add(2, 'd').format(MOMENT_SERVER_DATE_FORMAT));
      expect(controller.onDatesSet.calledWith({ startDate: moment('2018-07-11'), endDate: moment('2018-07-27') })).to.be.true;
    });
  });

  describe('Method: endDateChanged', () => {
    let momentDate;

    it('should set the end and max date w/o calling callback', () => {
      momentDate = moment('2018-07-27');

      controller.endDateChanged('2018-07-27');

      expect(controller.endDate).to.deep.equal(momentDate);
      expect(controller.maxDate).to.deep.equal(momentDate.subtract(2, 'd').format(MOMENT_SERVER_DATE_FORMAT));
    });

    it('should set the end and max date w/ calling callback', () => {
      momentDate = moment('2018-07-27');
      controller.startDate = moment('2018-07-11');

      controller.endDateChanged('2018-07-27');

      expect(controller.endDate).to.deep.equal(momentDate);
      expect(controller.maxDate).to.deep.equal(momentDate.subtract(2, 'd').format(MOMENT_SERVER_DATE_FORMAT));
      expect(controller.onDatesSet.calledWith({
        startDate: moment('2018-07-11'),
        endDate: moment('2018-07-27')
      })).to.be.true;
    });
  });
});
