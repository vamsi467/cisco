describe('Testing the hero list page', function () {

  it('should contain the word heroes', function () {
    cy.visit('http://localhost:4200');
    cy.contains('Lazy loaded feature module');
    cy.get('[data-test="lazy-route-link"]')
        .click();
    cy.get('[data-test="users-item"]').should('have.length', 11)
  })

});
