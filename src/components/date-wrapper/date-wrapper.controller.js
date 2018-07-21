import moment from 'moment';

import { MOMENT_SERVER_DATE_FORMAT } from '../../app.constants';

export default class DateWrapperController {
  startDateChanged(date) {
    this.startDate = moment(date);
    this.minDate = this.startDate.add(2, 'd').format(MOMENT_SERVER_DATE_FORMAT);

    if (this.endDate) {
      this.onDatesSet({ startDate: this.startDate, endDate: this.endDate });
    }
  }

  endDateChanged(date) {
    this.endDate = moment(date);
    this.maxDate = this.endDate.subtract(2, 'd').format(MOMENT_SERVER_DATE_FORMAT);

    if (this.startDate) {
      this.onDatesSet({ startDate: this.startDate, endDate: this.endDate });
    }
  }
}
