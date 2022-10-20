/// <reference types="cypress" />

describe('US002 - Lista Pokémon', () => {

    it('Deve listar o pokemon Ditto com sucesso', () => {
        
        cy.request({
            method: 'GET',
            url: 'https://pokeapi.co/api/v2/pokemon/ditto'
        }).should((response) => {
            expect(response.status).eq(200);
            expect(response.body.abilities[0].ability.name).to.equal('limber');
            
        })

    });

    it.only('Deve listar o pokemon Pikachu com sucesso', () => {
        
        cy.request('https://pokeapi.co/api/v2/pokemon/pikachu')
            .then((resp) => {
                expect(resp.status).to.equal(200);
            })

    });

})