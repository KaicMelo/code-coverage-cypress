describe('template spec', () => {
  it('passes', () => {
    cy.visit('/')
    cy.get('.content > :nth-child(2)').should('have.text','Resources');
  })
})
