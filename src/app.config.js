export default ($locationProvider, $urlRouterProvider, $stateProvider) => {
  'ngInject';

  $urlRouterProvider.otherwise('/');
  $locationProvider.html5Mode(true);
  $stateProvider
    .state('home', {
      url: '/',
      component: 'homePage',
      resolve: {
        airports: (AirportsService) => {
          'ngInject';

          return AirportsService.getAirports()
            .then(res => res.data);
        }
      }
    })
    .state('home.flight-list', {
      url: 'flight-list/:startIata/:startDate/:endIata/:endDate',
      component: 'flightListPage',
      resolve: {
        flights: ($stateParams, CheapFlightsService) => {
          'ngInject';

          if (!$stateParams.startDate || !$stateParams.startIata
            || !$stateParams.endDate || !$stateParams.endIata) {
            return [];
          }

          return CheapFlightsService.getFlights($stateParams.startDate, $stateParams.startIata,
            $stateParams.endDate, $stateParams.endIata)
            .then(res => res.data.flights);
        }
      }
    });
};
