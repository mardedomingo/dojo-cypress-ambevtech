/// <reference types="cypress" />
//import user from "../../fixtures/user.json"

/*

Funcionalidade: Tela de Login

EU COMO usuária do conexão QA
QUERO fazer meu cadastro
PARA me conectar com outros QAs

Cenário: Login com sucesso

(Pré condição) DADO que eu esteja na página de Login
(Ação) QUANDO eu inserir os dados válidos
(Resultado esperado) ENTÃO deve me direcionar para o dashboard

Cenário: Login com usuário ou senha inválido deve aparecer mensagem de erro

Cenário: Recuperar senha

*/

describe('US001: Tela de Login', () => {

    /*
    
    Hooks (ganchos)

    before (antes de todos os cenários)
    beforeEach (antes de cada cenário)
    after (depois de todos os cenários)
    afterEach (depois de cada cenário)

    */

    beforeEach(() => {
        cy.visit('login');
    });

    afterEach(() => {
        cy.screenshot();
    });
    
    it('Login com sucesso', () => {
        
        cy.fixture('user').then((user) => {
            cy.login(user.email, user.password);
        });
        cy.get('p[data-test="dashboard-welcome"]').should('contain', 'Bem-vindo Mar Domingos');

    });

    it('Deve aparever mensagem de alerta ao digitar usuário incorreto', () => {
        cy.get('input[type="email"]').type('mardomingosss@email.com');
        cy.get('input[type="password"]').type('abcde3456a#');
        cy.get('input[type="submit"]').click({ force: true });
        cy.get('div[data-test="alert"]').should('contain', 'Credenciais inválidas');
    });

    it('Deve aparever mensagem de alerta ao digitar senha incorreta', () => {
        cy.get('input[type="email"]').type('mardomingos@email.com');
        cy.get('input[type="password"]').type('abcde3456a#');
        cy.get('input[type="submit"]').click({ force: true });
        cy.get('div[data-test="alert"]').should('contain', 'Credenciais inválidas');
    });

})