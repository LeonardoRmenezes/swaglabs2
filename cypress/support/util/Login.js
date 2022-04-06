
/// <reference path="../commands.d.ts" />

import LoginPage from '../pageobjects/LoginPage'
const loginPage = new LoginPage


Given("access website with user:{} password:{}", (username, password) => {
    cy.loginSwagLabs(username, password)
});

Given("access website", () => {
    cy.loginSwagLabs('standard_user', 'secret_sauce')
});

Then("should display {}", (result) => {
    loginPage.testLogin(result)
});
