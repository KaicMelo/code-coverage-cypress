import { AppComponent } from '../src/app/app.component';

describe('ComponentName.cy.ts', () => {
  it('playground', () => {
    cy.mount(AppComponent);
    cy.get('.content > :nth-child(5)').should('have.text','Next Steps')
  })
})
