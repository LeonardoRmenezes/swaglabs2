/// <reference types="Cypress" />
import { inventory } from '../../../inventory.json'
import InventoryElements from '../elements/InventoryElements'
const inventoryElements = new InventoryElements
//let inv = new inventory

class InventoryPage {

    clickAddItems() {
        cy.get(inventoryElements.addItems()).click()
    }

    addItemsById(id) {
        cy.get(inventoryElements.addItems(id)).click()
    }

    addItemsByDescription(description) {
        cy.get(inventoryElements.addItemsByDescription(description)).click()
        cy.get(inventoryElements.shoppingCartQtd()).should('be.visible')
    }

    clickRemoveItems() {
        cy.get(inventoryElements.removeItems()).click()
    }

    seeInventoryElements() {
        cy.url().should('contains', 'https://www.saucedemo.com')
        cy.get(inventoryElements.menu()).should('be.visible').as('Menu')
        cy.get(inventoryElements.title()).should('contain', 'Products')
        cy.get(inventoryElements.appLogo()).should('be.visible').as('Logo')
        cy.get(inventoryElements.selectOrder()).should('be.visible').as('Btn Order')
        cy.get(inventoryElements.inventoryList()).should('be.visible').as('Inventory List')
        cy.get(inventoryElements.shoppingCart()).should('be.visible').as('Inventory List')
        cy.get(inventoryElements.footer()).should('be.visible').as('Footer')
    }

    seeCartQty() {
        cy.get(inventoryElements.shoppingCartQtd()).invoke('text').should('contain', '1')
        cy.log('seeCartQty').as('seeCartQty')
    }

    clickShoppingCart() {
        cy.get(inventoryElements.shoppingCart()).click()
    }

    checkInventory() {
        cy.get(inventoryElements.modalItem()).should('contain', 'Sauce')
        cy.get(inventoryElements.item1()).should('contain', 'Sauce')
    }
}
export default InventoryPage;
