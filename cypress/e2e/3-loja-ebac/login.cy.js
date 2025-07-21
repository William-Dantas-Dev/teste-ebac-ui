/// <reference types="cypress" />

describe('Function: Login', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });

    afterEach(() => {
        cy.screenshot()
    });
    
    it('Login', () => {
        cy.get('#username').type('wil@gmail.com')
        cy.get('#password').type('teste@123')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('exist')
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, wil (não é wil? Sair)')
    })

    it('Show Error Invalid User', () => {
        cy.get('#username').type('wil123@gmail.com')
        cy.get('#password').type('teste@123')
        cy.get('.woocommerce-form > .button').click()

        // cy.get('.woocommerce-error > li').should('exist')
        cy.get('.woocommerce-error > li').should('contain', 'Endereço de e-mail desconhecido. Verifique novamente ou tente seu nome de usuário.')
    });

    it('Show Error Invalid Password', () => {
        cy.get('#username').type('wil@gmail.com')
        cy.get('#password').type('123')
        cy.get('.woocommerce-form > .button').click()

        // cy.get('.woocommerce-error > li').should('exist')
        cy.get('.woocommerce-error > li').should('contain', 'Erro: A senha fornecida para o e-mail wil@gmail.com está incorreta. Perdeu a senha?')
    });

})