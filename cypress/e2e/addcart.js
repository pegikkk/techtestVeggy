describe('', () => {
  var phonenumber = 81916027805
  var otpinput = 1234

  it('A customer adds an item to their cart.', () => {
    cy.visit('/')
    cy.viewport(390,844)
    cy.login(phonenumber, otpinput)
    cy.wait(5000)
    cy.get('span:contains("KIRU-KIRU SHABU")').click()
    cy.wait(5000)
    cy.get('#add-item-button').click()
    cy.wait(3000)
    cy.get('body').then(($parent) => {
      if ($parent.find('p:contains("This item already in cart")').length > 0) {
        cy.get('button:contains("Make Another")').should('have.text', 'Make Another')
        cy.get('button:contains("Make Another")').click()
        cy.wait(5000)
        cy.get('#add-to-cart-button').click()
        cy.wait(3000)
        cy.get('[data-testid="CloseIcon"]').click()
      } else {
        cy.get('#add-to-cart-button').should('have.text', 'Add to Cart')
        cy.get('#add-to-cart-button').click()
      }
      
      cy.get('#cart-icon').click()
    })
  })
})