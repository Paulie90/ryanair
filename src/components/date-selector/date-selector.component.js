import template from './date-selector.component.html';
import controller from './date-selector.controller';

export const DateSelectorComponent = {
  bindings: {
    initDate: '<?',
    minDate: '<',
    maxDate: '<',
    onDateChange: '&',
  },
  template,
  controller
};
