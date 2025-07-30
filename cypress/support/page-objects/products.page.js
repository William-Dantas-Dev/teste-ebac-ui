class ProductPage {
    visitUrl() {
        cy.visit('produtos')
    }

    findProduct(nameProduct) {
        cy.get('[name="s"]').eq(1).type(nameProduct);
        cy.get('.button-search').eq(1).click();
    }

    findListProducts(nameProduct) {
        cy.get('.products > .row')
        .contains(nameProduct)
        .click()
    }

    visitProduct(){

    }

    addProductToCart(){
        
    } 
}

export default new ProductPage()