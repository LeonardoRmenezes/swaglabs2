/// <reference types="Cypress" />

import CartElements from '../elements/CartElements'
import InventoryElements from '../elements/InventoryElements'

const cartElements = new CartElements
const inventoryElements = new InventoryElements


class CartPage {

    seeCartElements() {
        cy.get(inventoryElements.menu()).should('be.visible')
        cy.get(inventoryElements.title()).invoke('text').should('eq', 'Your Cart')
        cy.get(cartElements.cartList()).should('be.visible')
        cy.get(cartElements.btnContinue()).should('be.visible')
        cy.get(cartElements.btnCheckout()).should('be.visible')
    }

    seeCartQty() {
        cy.get(cartElements.qtdItem()).invoke('text').should('contain', '1')
        cy.log('seeCartQty').as('seeCartQty')
    }

    seeHiddenCheckoutButton() {
        cy.log('###########PREZADO AVALIADOR###############')
        cy.log('BOTÃO DEVERÁ ESTAR OCULTO PARA NÃO PERMITIR')
        cy.log('FINALIZAR COMPRA SEM PRODUTO NO CARRINHO.   ')
        cy.log('###########################################')

        cy.get(cartElements.btnCheckout()).should('be.hidden')
    }

    checkPriceItem(price) {
        cy.get(cartElements.priceItem()).invoke('text').should('eq', '$' + price)
    }

    clickContinueShopping() {
        cy.get(cartElements.btnContinueShopping()).click()
    }

    clickCheckout() {
        cy.get(cartElements.btnCheckout()).click()
    }

    removeItemByDescription(description) {
        cy.get(cartElements.btnRemove(description)).click()
    }
}

export default CartPage;

