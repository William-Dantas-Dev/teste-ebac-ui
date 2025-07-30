/// <reference types="cypress" /> 

describe('Function: Account Details', () => {

    beforeEach(() => {
        cy.visit("minha-conta/edit-account/")
        cy.login("wil@gmail.com", "teste@123")
        
    });

    it('You must complete the purchase details if you are logged in.', () => {
        cy.accountDetails("William", "Dantas", "William Dantas")
        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')
    });
})