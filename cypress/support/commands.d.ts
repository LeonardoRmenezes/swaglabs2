/// <reference types="cypress"/>

declare namespace Cypress {
  
  interface Chainable {
    /** 
     * **Allows you to access and log in to the url configured in baseUrl.**
     * 
     * @param username string
     * @param password string - if the password is empty, the one configured in constants.password will be used.
     * 
     * @example cy.loginSwagLabs(username) 
     * @example cy.loginSwagLabs(username,password)
     * */ 

     loginSwagLabs(username:string, password?: string, options?: object): void | Cypress.Chainable<null>
  }
}