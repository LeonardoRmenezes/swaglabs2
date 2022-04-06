/// <reference types="Cypress" />

import { constants } from "../../../constants"
import OverviewElements from '../elements/OverviewElements'
import InventoryElements from "../elements/InventoryElements"
const overviewElements = new OverviewElements
const inventoryElements = new InventoryElements

let tax = constants.tax
class OverviewPage {
    clickOnBtnFinish() {
        cy.get(overviewElements.btnFinish()).click()
    }

    seeOverviewElements() {
        cy.get(inventoryElements.title()).invoke('text').should('eq', 'Checkout: Overview')
        cy.get(overviewElements.summaryInfo()).should('to.be', 'visible')
        cy.get(inventoryElements.btnCancel()).should('to.be', 'visible')
    }


    checkValues(price) {

        var round = function (number, decimalPlaces) {
            decimalPlaces = typeof decimalPlaces !== 'undefined' ? decimalPlaces : 2;
            return +(Math.round(number + ('e+' + decimalPlaces)) + ('e-' + decimalPlaces));
        };

        let valueTax = round((price * tax) / 100).toFixed(2)
        let total = round(price) + round(valueTax)

        //cy.log('#################################') 
        //cy.log('PRICE: '+ price).as('PRICE') 
        //cy.log('TAX(%):' + tax).as('TAX-%')
        //cy.log('TAX($):' + valueTax).as('TAX-$')
        //cy.log('TOTAL:' + total).as('PRICE+TAX-$)')
        //cy.log('#################################') 

        cy.get(overviewElements.subtotal()).invoke('text').should('eq', 'Item total: $' + price)
        cy.get(overviewElements.valueTax()).invoke('text').should('eq', 'Tax: $' + valueTax)
        cy.get(overviewElements.total()).invoke('text').should('eq', 'Total: $' + total)

    }

}

export default OverviewPage;



