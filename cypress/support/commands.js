//import "cypress-localstorage-commands"
import { constants } from "../../constants"
import LoginElements from "./elements/LoginElements"
const loginElements = new LoginElements
const url = (Cypress.env('url'))

Cypress.Commands.add('loginSwagLabs', (username,password) => {
   
   cy.visit(url)
   cy.clearCookies()
   cy.clearLocalStorage()
   cy.get('.login_wrapper').should('to.be.visible')

   
   cy.log('### fill user ###')

   if (username == '') {
      cy.get(loginElements.username()).invoke('text').should('be.empty')
   } else {
      cy.get(loginElements.username()).type(username)
   }

   cy.log('### fill password ###')

   if (password == '') {
      cy.get(loginElements.password()).type(constants.password)
   } else {
      cy.get(loginElements.password()).type(password)
   }



   
   //cy.get('[data-test="password"]').type(constants.password)
   cy.get(loginElements.btnLogin()).click()
   //cy.get('[id=contents_wrapper]').should('to.be.visible')
  // cy.wait(3000)
})





Cypress.Commands.add('calculate', (totalItem, priceItem) => {
   let tax = constants.tax
   let totalTax = totalTax
   //console.log('cpommand.tax'+tax)
   // let totalItem = totalItem

   totalItem = totalItem + priceItem
   totalTax = totalTax * tax

   cy.log('totalItem' + totalItem)
   cy.log('totalTax' + totalTax)
})



