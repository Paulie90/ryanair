import moment from 'moment';

import { MOMENT_SERVER_DATE_FORMAT } from '../../app.constants';

export default class DateWrapperController {
  startDateChanged(date) {
    const momentDate = moment(date);

    if (!momentDate.isValid()) {
      return;
    }

    this.startDate = momentDate;
    this.minDate = moment(date).add(2, 'd').format(MOMENT_SERVER_DATE_FORMAT);

    if (this.endDate) {
      this.onDatesSet({ startDate: this.startDate, endDate: this.endDate });
    }
  }

  endDateChanged(date) {
    const momentDate = moment(date);

    if (!momentDate.isValid()) {
      return;
    }

    this.endDate = momentDate;
    this.maxDate = moment(date).subtract(2, 'd').format(MOMENT_SERVER_DATE_FORMAT);

    if (this.startDate) {
      this.onDatesSet({ startDate: this.startDate, endDate: this.endDate });
    }
  }
}
