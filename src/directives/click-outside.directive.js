export default function ($parse, $document) {
  'ngInject';

  return {
    compile: ($element, attr) => {
      const callback = $parse(attr.clickOutside);

      return (scope, element) => {
        // Click on the element
        element.bind('click', (event) => {
          event.stopPropagation();
        });

        // Click outside
        angular.element($document[0].body).bind('click', (event) => {
          scope.$apply(() => {
            callback(scope, { $event: event });
          });
        });
      };
    }
  };
}
