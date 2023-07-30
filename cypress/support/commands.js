// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add('login', (phonenumber, otpinput) => {
    cy.visit('/')
    cy.viewport(390,844)
    cy.wait(3000)
    cy.get('.css-ycd3nx > .MuiBottomNavigationAction-label').click()
    cy.get('#phone-number-input').type(phonenumber,{force:true})
    cy.get('#next-signup-login-button').click({force:true})
    cy.get('.modal-body')
    cy.get('#otp-input').type(otpinput)
    cy.wait(3000)
    cy.get('#submit-signup-login-button').click({force:true})
    cy.wait(3000)
    cy.get('[tabindex="4"]').should('have.text', 'PROFILE');
})

Cypress.Commands.add('iframe', { prevSubject: 'element' }, $iframe => {
    return new Cypress.Promise(resolve => {
        $iframe.ready(function() {
          resolve($iframe.contents().find('body'));
        });
    });
});

Cypress.Commands.add('iframeInside', { prevSubject: 'element' }, $iframeInside => {
    return new Cypress.Promise(resolve => {
        $iframeInside.ready(function() {
          resolve($iframeInside.contents().find('body'));
        });
    });
});
// Cypress.Commands.add('login', (email, password) => { ... })
  
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })