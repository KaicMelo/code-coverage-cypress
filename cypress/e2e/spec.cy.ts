describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
    cy.get('h1').contains('Kitchen Sink');
  })
})