/// <reference types="cypress" />

import productsPage from "../../support/page-objects/products.page";

describe('Function: Product', () => {

    beforeEach(() => {
        //productPage.visitUrl();
        productsPage.visitUrl();
    });
    
    it('Select Product', () => {
        let product = 'Aero Daily Fitness Tee';
        productsPage.findListProducts(product);
        cy.get('.product_title').should('contain', product);
    });

    it('must successfully search for a product', () => {
        productsPage.findProduct('Aero Daily Fitness Tee');
    })

    it('Must visit the product page', () => {

    })

    it('Must add product to cart', () => {

    })
});