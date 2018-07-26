export const mockedAirports = {
  airports: [{
    iataCode: 'AAR',
    name: 'Aarhus',
    base: false,
    latitude: 56.3,
    longitude: 10.619,
    country: {
      code: 'dk',
      currency: 'DKK',
      englishSeoName: 'denmark',
      name: 'Denmark',
      seoName: 'denmark',
      url: 'denmark'
    }
  }, {
    iataCode: 'AGA',
    name: 'Agadir',
    base: false,
    longitude: -9.41307,
    latitude: 30.325,
    country: {
      code: 'ma',
      name: 'Morocco',
      seoName: 'morocco',
      englishSeoName: 'morocco',
      currency: 'MAD',
      url: 'morocco'
    }
  }],
  closures: {},
  countries: [{
    code: 'at', name: 'Austria', seoName: 'austria', englishSeoName: 'austria', currency: 'EUR'
  }],
  discounts: {
    routes: { IBZSCQ: ['ESDSC5', 'ESDSC4', 'ESDSC1'], TFNIBZ: ['ESDSC5', 'ESDSC4', 'ESDSC1'] }
  },
  messages: { choose_departure_airport: 'Choose a departure airport' },
  routes: { AAR: ['AGA'], AGA: ['AAR'] }
};
export const mockedStateParams = {
  startIata: 'AAR',
  endIata: 'AGA',
  startDate: '2018-07-11',
  endDate: '2018-07-25'
};
