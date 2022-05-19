it('should display the weather component', () => {
  cy.intercept('https://api.weatherapi.com/v1/current.json*', {
    statusCode: 200,
    fixture: 'weatherapi.json',
    delay: 1000,
  }).as('getCurrentWeather');

  cy.visit('/', {
    onBeforeLoad(win) {
      // Oimyakon Geolocation
      const latitude = 63.46329;
      const longitude = 142.76495;

      cy.stub(win.navigator.geolocation, 'getCurrentPosition').callsFake(
        (cb) => {
          return cb({ coords: { latitude, longitude } });
        }
      );
    },
  });

  // Mock the current date
  cy.clock(new Date(2022, 4, 16).getTime());

  cy.get('[data-cy=loading]').should('be.visible');

  cy.wait('@getCurrentWeather');

  cy.get('[data-cy=weather]').should('be.visible');

  cy.contains('Monday').should('be.visible');
  cy.contains('London').should('be.visible');
  cy.contains('17°C').should('be.visible');
  cy.contains('Partly cloudy').should('be.visible');
  cy.contains('Wind Speed').should('be.visible');
  cy.contains('15.1 km/h').should('be.visible');
  cy.contains('Wind Direction').should('be.visible');
  cy.contains('WNW').should('be.visible');
  cy.contains('UV Index').should('be.visible');
  cy.contains('5').should('be.visible');
  cy.contains('Humidity').should('be.visible');
  cy.contains('68%').should('be.visible');
  cy.contains('Pressure').should('be.visible');
  cy.contains('1019mb').should('be.visible');
  cy.contains('Visibility').should('be.visible');
  cy.contains('10km').should('be.visible');
});

it('should display an error message when the call return an error', () => {
  cy.intercept('https://api.weatherapi.com/v1/current.json*', {
    statusCode: 400,
    body: {
      error: {
        code: 2006,
        message: 'API key is invalid.',
      },
    },
    delay: 1000,
  }).as('getCurrentWeather');

  cy.visit('/', {
    onBeforeLoad(win) {
      // Oimyakon Geolocation
      const latitude = 63.46329;
      const longitude = 142.76495;

      cy.stub(win.navigator.geolocation, 'getCurrentPosition').callsFake(
        (cb) => {
          return cb({ coords: { latitude, longitude } });
        }
      );
    },
  });

  cy.get('[data-cy=loading]').should('be.visible');

  cy.wait('@getCurrentWeather');

  cy.get('[data-cy=error]').should('be.visible');
  cy.get('[data-cy=error]').should(
    'contain',
    'Impossible to load weather data.'
  );
});
