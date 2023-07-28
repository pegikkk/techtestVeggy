describe('', () => {

  it('An existing customer logging out', () => {
    cy.visit('/')
    cy.viewport(390,844)
    cy.get('.css-ycd3nx > .MuiBottomNavigationAction-label').click()
    cy.get('#phone-number-input').type(81916027805,{force:true})
    cy.get('#next-signup-login-button').click({force:true})
    cy.get('.modal-body')
    cy.get('#otp-input').type(1234,{force:true})
    cy.get('#submit-signup-login-button').click({force:true})
    cy.get('[tabindex="4"]').should('have.text', 'PROFILE')
    cy.get('[tabindex="4"] > .MuiBottomNavigationAction-label').click()
    cy.get(':nth-child(2) > :nth-child(1) > :nth-child(2) > :nth-child(3)').click()
    cy.get('.css-ycd3nx > .MuiBottomNavigationAction-label').should('have.text',"LOGIN")
  })
})