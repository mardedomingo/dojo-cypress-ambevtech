/// <reference types="cypress" />

describe('US003: Login via API', () => {

    it('Deve fazer login com sucesso', () => {
        cy.request({
            method: 'POST',
            url: 'api/auth',
            body: {
                "email": "mardomingos@email.com",
                "password": "abcde3456#"
            }
        }).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body).to.have.property('jwt');
        })
    });

})