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

 Cypress.Commands.add('login', (loginName, myPassword) => {
   
   cy.visit("https://automationteststore.com/");
   cy.get("a").contains("Login or register").click();
   cy.get("#loginFrm_loginname").type(loginName);
   cy.get("#loginFrm_password").type(myPassword);
   cy.get('button[title="Login"]').click();
 })
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

require('cypress-xpath');
