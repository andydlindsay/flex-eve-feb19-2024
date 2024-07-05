describe('displaying api results', () => {

  it('can display results from an API request', () => {
    // visit the homepage
    cy.visit('/');

    // intercept the outgoing /search request and respond with hardcoded data
    cy.intercept('GET', '**/search*', { fixture: 'itunes' })
      .as('daftPunkResults');

    // get the input field and type "Daft Punk"
    cy.get('.radius')
      .type('Daft Punk');

    // wait for the get request to resolve
    cy.wait('@daftPunkResults');

    // check the DOM for a specific album
    cy.contains('Random Access Memories')
      .should('be.visible');

    // uncheck the explicit checkbox
    cy.get('#Explicit')
      .uncheck();

    // check the DOM to make sure the explicit album is gone
    cy.get('body')
      .should('not.contain', 'Daft Club');
  });

});
