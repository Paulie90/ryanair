export default class DateSelectorController {
  $onInit() {
    if (this.initDate) {
      this.onDateChange({ date: this.initDate });
    }
  }
}
