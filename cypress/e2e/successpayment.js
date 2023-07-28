describe('', () => {


  it('A successful credit card payment by a customer.', () => {
    cy.visit('/')
    cy.viewport(390,844)
    cy.get('.css-ycd3nx > .MuiBottomNavigationAction-label').click()
    cy.get('#phone-number-input').type(81916027805,{force:true})
    cy.get('#next-signup-login-button').click({force:true})
    cy.get('.modal-body')
    cy.get('#otp-input').type(1234)
    cy.get('#submit-signup-login-button').click({force:true})
    cy.get('[tabindex="4"]').should('have.text', 'PROFILE');
    cy.get(':nth-child(1) > [style="opacity: 1; box-shadow: rgba(128, 128, 128, 0.2) 0px 0px 5px; border: 1px solid rgb(205, 205, 205); padding: 10px; cursor: pointer; display: flex; flex-direction: row; margin: 5px; border-radius: 5px;"] > [style="display: flex; flex-direction: column; justify-content: center; width: 100%; text-align: left;"] > [style="flex-direction: row; justify-content: space-between;"] > #outlet-name-option').click()
    cy.get('#add-item-button').click()
    cy.get('#add-to-cart-button').should('have.text', 'Add to Cart');
    cy.get('#add-to-cart-button').click()
    cy.get('#cart-icon').click()
    cy.get('.MuiPaper-root > [data-testid="wrapper"]')
    cy.get('[style="width: 100%; display: flex; justify-content: center;"] > :nth-child(1)').click()
    cy.get('[style="color: white; width: 50%; padding: 6px 0px; border-radius: 10px;"]').click({force:true})
    cy.get('[style="padding: 7px 10px; width: 70%;"] > .MuiButton-root').click({force:true})
    cy.get('.css-q7tzct > .MuiBox-root > .MuiButton-root').click()
    cy.get('.MuiGrid-grid-md-6').click({force:true})
    cy.get('#mui-14').click()
    cy.get('h2.text-center')
  })
})