it('should display the weather component', () => {
  cy.intercept('http://api.weatherstack.com/current*', {
    statusCode: 200,
    fixture: 'weatherstack.json',
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
  cy.contains('New York').should('be.visible');
  cy.contains('13°C').should('be.visible');
  cy.contains('Sunny').should('be.visible');
  cy.contains('Wind Speed').should('be.visible');
  cy.contains('0 km/h').should('be.visible');
  cy.contains('Wind Direction').should('be.visible');
  cy.contains('n').should('be.visible');
  cy.contains('UV Index').should('be.visible');
  cy.contains('4').should('be.visible');
  cy.contains('Humidity').should('be.visible');
  cy.contains('90%').should('be.visible');
  cy.contains('Pressure').should('be.visible');
  cy.contains('1010 mbar').should('be.visible');
  cy.contains('Visibility').should('be.visible');
  cy.contains('16 km').should('be.visible');
});

it('should display an error message when the call return an error', () => {
  cy.intercept('http://api.weatherstack.com/current*', {
    statusCode: 200,
    body: {
      success: false,
      error: {
        code: 104,
        type: 'usage_limit_reached',
        info: 'Your monthly usage limit has been reached. Please upgrade your Subscription Plan.',
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
