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
            .then(res => res.data.airports);
        }
      }
    })
    .state('home.flight-list', {
      url: 'flight-list/:startDate/:startIata/:endDate/:endIata',
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
