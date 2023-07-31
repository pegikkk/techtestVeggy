describe('', () => {

  var phonenumber = 81916027805
  var otpinput = 1234

  it('A successful credit card payment by a customer.', () => {
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
        cy.wait(4000)
        cy.get('[data-testid="CloseIcon"]').click()
      } else {
        cy.get('#add-to-cart-button').should('have.text', 'Add to Cart')
        cy.get('#add-to-cart-button').click()
      }
      
      cy.get('#cart-icon').click()
    })
    cy.get('[style="width: 100%; display: flex; justify-content: center;"] > :nth-child(1)').click()
    cy.get('[style="color: white; width: 50%; padding: 6px 0px; border-radius: 10px;"]').click({force:true})
    cy.get('.MuiButton-root > .MuiTypography-root').click({force:true})
    cy.wait(3000)
    cy.get('.css-q7tzct > .MuiBox-root > .MuiButton-root').click()
    cy.get('.MuiGrid-grid-md-6').click({force:true})
    cy.get('#mui-15').click({force:true})
    cy.wait(5000)
    cy.get('[style="display: flex; justify-content: center;"] > .MuiTypography-root').should('have.text','Your card was declined.')
  })
})