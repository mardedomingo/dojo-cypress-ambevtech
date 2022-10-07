/// <reference types="cypress" />
const faker = require('faker-br');
//https://www.npmjs.com/package/faker-br

describe('US002: Tela de Cadastro', () => {
    
    beforeEach(() => {
        cy.visit('cadastrar');
    });

    it('Cadastro com sucesso', () => {

        let name = faker.name.findName();
        let email = faker.internet.email(name);

        cy.get('input[type="text"]').type(name);
        cy.get('input[type="email"]').type(email);
        cy.get('input[name="password"]').type('abc789&');
        cy.get('input[name="password2"]').type('abc789&');
        cy.get('input[data-test="register-submit"]').click({ force: true });
        cy.get('p[data-test="dashboard-welcome"]').should('contain', 'Bem-vindo ' + name);

    });
    
});