/// <reference types="Cypress" />
import ConfirmationElements from '../elements/confirmationElements'

const confirmationElements = new ConfirmationElements

class ConfirmationPage {

    seeConfirmationElements() {
        cy.get(confirmationElements.completeHeader()).should('contain', 'THANK YOU FOR YOUR ORDER')
        cy.get(confirmationElements.completeText()).should('contain', 'Your order has been dispatched, and will arrive just as fast as the pony can get there!')
        cy.get(confirmationElements.imgPoneyExpress()).should('be.visible')
        cy.get(confirmationElements.btnHome()).should('be.visible')
    }
}

export default ConfirmationPage;
