/// <reference types="Cypress" />

import { constants } from '../../../constants.js'
import LoginElements from '../elements/LoginElements'
import InventoryPage from '../pageobjects/InventoryPage'
const loginElements = new LoginElements
const inventoryPage = new InventoryPage

class LoginPage {

     testLogin(result) {

          if (result == 'website main screen') {
               cy.get(inventoryPage.seeInventoryElements()).should('to.be', 'visible')
          } if (result == 'username and password incorrect') {
               //cy.get(loginElements.msgError()).should('to.be', 'visible')
               cy.get(loginElements.msgError()).invoke('text').should('eq', constants.msgError.incorrect)
          } if
               (result == 'blocked user message') {
               cy.get(loginElements.msgError()).invoke('text').should('eq', constants.msgError.usernameBlocked)
          }
     }

     seeMsgError() {
          let msgError = cy.get(loginElements.msgError()).invoke('text')
          cy.log('msg error: ' + msgError)
     }

}


export default LoginPage;
