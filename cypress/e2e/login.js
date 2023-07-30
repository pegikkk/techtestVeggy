describe('', () => {
  var chance = require('chance').Chance();

  it('An existing customer logging in', () => {
    cy.visit('/')
    cy.viewport(390,844)
    cy.wait(3000)
    cy.get('.css-ycd3nx > .MuiBottomNavigationAction-label').click()
    cy.get('#phone-number-input').type(81916027805,{force:true})
    cy.get('#next-signup-login-button').click({force:true})
    cy.get('.modal-body')
    cy.get('#otp-input').type(1234)
    cy.wait(3000)
    cy.get('#submit-signup-login-button').click({force:true})
    cy.wait(3000)
    cy.get('[tabindex="4"]').should('have.text', 'PROFILE');
  })
})