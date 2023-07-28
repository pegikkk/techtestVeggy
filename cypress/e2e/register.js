describe('', () => {
  var chance = require('chance').Chance();
  var random_number = chance.integer({ min: 80000000, max: 89999999 });
  var name = chance.name()
  var email = chance.email()
  var street = chance.street()
  var unit = chance.natural({ min: 1, max: 20 })
  var nric = chance.integer({ min: 1, max: 100 })

  it('Registering of a new customer', () => {
    cy.visit('/')
    cy.viewport(390,844)
    cy.get('.css-ycd3nx').click()
    cy.get('.modal-content')
    cy.get('#phone-number-input').type(random_number)
    cy.get('#next-signup-login-button').click({force:true})
    cy.get('#login-register-modal')
    cy.get('#name-phone-input').type(name)
    cy.get('#email-input').type(email)
    cy.get('.date > div')
    cy.get('.datepicker-navbar > :nth-child(1)').click({force:true})
    cy.get(':nth-child(2) > .un-select-gender > .fa').click()
    cy.get('#street').type(street)
    cy.get('#unitNo').type(unit)
    cy.get('#nric\(last4digits\)').type(nric)
    cy.get(':nth-child(5) > .woocommerce-FormRow > .styles_select__vvgdy').click()



  })
})