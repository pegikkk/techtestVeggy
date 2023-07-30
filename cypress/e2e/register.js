describe('', () => {
  require('@4tw/cypress-drag-drop')
  var chance = require('chance').Chance();
  var random_number = chance.integer({ min: 80000000, max: 89999999 });
  var name = chance.name()
  var email = chance.email()
  var street = chance.street()
  var unit = chance.natural({ min: 1, max: 20 })
  var nric = chance.integer({ min: 1000, max: 9999 })
  var outletsignup = "AMK Outlet"
  var howdoyouknowus = "Instagram"
  var choosenumber = "1"
  var choosedropdown = "Test1"

  it('Registering of a new customer', () => {
    cy.visit('/')
    cy.viewport(390,844)
    cy.wait(3000)
    cy.get('.css-ycd3nx').click()
    cy.wait(2000)
    cy.get('.modal-content')
    cy.get('#phone-number-input').type(random_number)
    cy.wait(3000)
    cy.get('#next-signup-login-button').click({force:true})
    cy.get('#login-register-modal')
    cy.wait(3000)
    cy.get('#name-phone-input').type(name)
    cy.get('#email-input').type(email)
    cy.get('.date > div').click()
    cy.get(':nth-child(3) > .datepicker-viewport > .datepicker-wheel > .datepicker-scroll > :nth-child(6)')
    .trigger('mousedown', { which: 1, pageX: 600, pageY: 100 })
    .trigger('mousemove', { which: 1, pageX: 600, pageY: 1000 })
    .trigger('mouseup')
    cy.wait(2000)
    cy.get('.datepicker-navbar > :nth-child(1)').click({force:true})
    cy.get(':nth-child(2) > .un-select-gender > .fa').click()
    cy.get('#street').type(street)
    cy.get('#unitNo').type(unit)
    cy.get('input[name="nric(last4digits)"]').type(nric)
    cy.get('select[name="outletsignup"]').select(outletsignup)
    cy.get('select[name="howdoyouknowus"]').select(howdoyouknowus)
    cy.get('select[name="choosenumber"]').select(choosenumber)
    cy.get('select[name="choosedropdown"]').select(choosedropdown)
    cy.get('#create-account-button').click()
    cy.wait(2000)
    cy.get('.modal-body')
    cy.get('#continue-button').click()
    cy.get('#otp-input').type(1234)
    cy.get('#continue-button').click()
    cy.get('[tabindex="4"] > .MuiBottomNavigationAction-label').should('have.text', 'PROFILE');
  })
})