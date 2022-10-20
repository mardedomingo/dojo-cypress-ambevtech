/// <reference types="cypress" />

describe('US004 - Perfil via API', () => {

    beforeEach(() => {
        cy.token().then((tkn) => { token = tkn });
    });

    let token;

    it('Deve cadastrar um perfil com sucesso', () => {
        cy.request({
            method: 'POST',
            url: 'api/profile',
            headers: {
                Cookie : token
            },
            body: {
                "company": "Ambev",
                "status": "QA Jr",
                "location": "Blumenau-SC",
                "skills": "Cypress",
                "bio": "Travesti Pernambucana",
                "githubusername": "mardedomingo",
                "twitter": "@aiaiaiaiaiai",
                "linkedin": "Mar Domingos Soares",
                "instagram": "@aiaiaiaiaiai"
            }
        }).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body.company).to.equal("Ambev");
            expect(response.duration).lessThan(500);
        });
    });

})