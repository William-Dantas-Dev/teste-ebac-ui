/// <reference types="cypress" />

describe('Function: Product', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos')
    });
    
    it('Select Product', () => {
        cy.get('.product-block')
        //.first()
        //.last()
        .eq(2)
        .click()

        cy.get('#tab-title-description > a').should('contain', 'Descrição')
    });
});