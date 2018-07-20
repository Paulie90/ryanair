import moment from 'moment';

import { MOMENT_DISPLAY_DATE_FORMAT } from '../../app.constants';

export default class DateWrapperController {
  startDateChanged(date) {
    this.fromDate = moment(date);
    this.minDate = this.fromDate.add(2, 'd').format(MOMENT_DISPLAY_DATE_FORMAT);

    if (this.toDate) {
      this.onDatesSet({ startDate: this.fromDate, endDate: this.toDate });
    }
  }

  endDateChanged(date) {
    this.toDate = moment(date);
    this.maxDate = this.toDate.subtract(2, 'd').format(MOMENT_DISPLAY_DATE_FORMAT);

    if (this.fromDate) {
      this.onDatesSet({ startDate: this.fromDate, endDate: this.toDate });
    }
  }
}
