import template from './date-selector.component.html';

export const DateSelectorComponent = {
  bindings: {
    minDate: '<',
    maxDate: '<',
    onDateChange: '&'
  },
  template,
};
