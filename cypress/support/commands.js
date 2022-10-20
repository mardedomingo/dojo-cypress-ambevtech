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

Cypress.Commands.add('login', (email, password) => {
    cy.get('input[type="email"]').type(email);
    cy.get('input[type="password"]').type(password);
    cy.get('input[type="submit"]').click({ force: true });
});

import user from "../fixtures/user.json";

Cypress.Commands.add('token', () => {
    cy.request({
        method: 'POST',
        url: 'api/auth',
        body: {
            "email": user.email,
            "password": user.password
        }
    }).then((response) => {
        return response.body.jwt;
    })
})