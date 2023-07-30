describe('', () => {
  var phonenumber = 81916027805
  var otpinput = 1234

  it('A customer adds a credit card to their account', () => {
    cy.visit('/')
    cy.viewport(390,844)
    cy.login(phonenumber, otpinput)
    cy.wait(5000)
    cy.get('[tabindex="4"]').click()
    cy.wait(5000)
    cy.get('[href="#/profile/payment-method"] > .background-theme > [style="text-align: center;"] > div').click({force:true})
    cy.get('#mui-6').click()
    cy.get('.MuiDialog-container > .MuiPaper-root')
    cy.get('.MuiDialogActions-root > .MuiButton-contained').click()
    cy.wait(10000)
    cy.get("iframe").eq(0).iframe().get("iframe").eq(0).iframe().find("iframe").eq(0).iframe().find('input').type(80001612023)
    cy.get("iframe").eq(0).iframe().get("iframe").eq(0).iframe().find("#card-button").click();
  })
})