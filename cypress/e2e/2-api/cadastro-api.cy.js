/// <reference types="cypress" />

describe('US001 - Cadastro via API', () => {

    let email = `mar${Math.floor(Math.random() * 1000000)}@dojo.com`;

    it('Deve fazer um cadastro com sucesso', () => {
        cy.request({
            method: 'POST',
            url: 'api/users',
            body: {
                "name": "Mar API",
                "email": email,
                "password": "abc123"
            }
        }).then((response) => {
            expect(response.status).to.equal(201);
            expect(response.body).to.have.property('jwt');
            expect(response.duration).lessThan(1000);
        })
    })

})