describe('tests for the input field', () => {

  beforeEach(() => {
    cy.visit('/');

    cy.get('.radius')
      .as('myInput');
  });

  it('can type into an input field', () => {
    cy.get('@myInput')
      .type('Carrie Underwood', { delay: 150 })
      .should('have.value', 'Carrie Underwood');
  });

  it('can use the backspace key', () => {
    cy.get('@myInput')
      .type('Beee{backspace}ge{backspace}{backspace} Gees', { delay: 150 })
      .should('have.value', 'Bee Gees');
  });

});
