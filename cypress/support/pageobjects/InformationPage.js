/// <reference types="Cypress" />
import InformationElements from '../elements/InformationElements'
import InventoryElements from '../elements/InformationElements'

const informationElements = new InformationElements
const inventoryElements = new InventoryElements

var Chance = require('chance');
var fake = new Chance();


class InformationPage {

    seeInformationElements() {
        cy.get(inventoryElements.menu()).should('be.visible')
        cy.get(inventoryElements.menu()).should('be.visible')
        cy.get(inventoryElements.title()).invoke('text').should('eq', 'Checkout: Your Information')
        cy.get(inventoryElements.appLogo()).should('be.visible')
        cy.get(inventoryElements.inventoryList()).should('be.visible')
        cy.get(inventoryElements.shoppingCart()).should('be.visible')
        cy.get(inventoryElements.shoppingCartQtd()).should('be.visible')
        cy.get(inventoryElements.selectOrder()).should('be.visible')
    }

    fillFirstName() {
        cy.get(informationElements.txtFirstName()).type(fake.first())
    }

    fillLastName() {
        cy.get(informationElements.txtLastName()).type(fake.last())
    }

    fillPostalCode() {
        cy.get(informationElements.txtPostalCode()).type(fake.zip({ plusfour: true }))
    }

    clickOnBtnCancel() {
        cy.get(informationElements.btnCancel()).click()
    }

    clickOnBtnContinue() {
        cy.get(informationElements.btnContinue()).click()
    }

    seeMsgError() {
        cy.get(informationElements.msgError()).should('be.visible')
    }

}

export default InformationPage;
