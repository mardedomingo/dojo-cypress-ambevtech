/// <reference types="cypress" />

import post from "../../fixtures/post.json";

describe('US005 - Publicação via API', () => {

    beforeEach(() => {
        cy.token().as("token");
    });

    it('Deve criar uma publicação com sucesso', function() {
        cy.request({
            method: 'POST',
            url: 'api/posts',
            headers: {
                Cookie : this.token
            },
            body: post
        }).then((response) => {
            expect(response.status).to.equal(201);
            expect(response.duration).lessThan(500);
        });
    });

})