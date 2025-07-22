/// <reference types="cypress" />

import { faker } from '@faker-js/faker'


describe('Function: Register', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });
    
    it('Register User Success', () => {
        var email = faker.internet.email()
        var password = faker.internet.password()
        var name = faker.person.firstName()
        var lastName = faker.person.lastName()

        cy.get('#reg_email').type(email)
        cy.get('#reg_password').type(password)
        cy.get(':nth-child(4) > .button').click()

        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('exist')
        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type(name)
        cy.get('#account_last_name').type(lastName)
        cy.get('.woocommerce-Button').click()
        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')
        
    });
});