/// <reference path="../../support/commands.d.ts" />

import InventoryPage from '../../support/pageobjects/InventoryPage';
import CartPage from '../../support/pageobjects/CartPage';
import InformationPage from '../../support/pageobjects/InformationPage';
import OverviewPage from '../../support/pageobjects/OverviewPage';
import ConfirmationPage from '../../support/pageobjects/ConfirmationPage';
import Login from '../../support/util/Login'
import AddItem from '../../support/util/AddItem'

const cartPage = new CartPage
const informationPage = new InformationPage
const overviewPage = new OverviewPage
const confirmationPage = new ConfirmationPage
const inventoryPage = new InventoryPage

When("click in add to cart", () => {
    inventoryPage.seeInventoryElements()
    inventoryPage.clickShoppingCart()
    cartPage.seeCartElements()
});

When("item value should be displayed {}", (price) => {
    cartPage.checkPriceItem(price)
});

When("click in remove to cart {}", (description) => {
    inventoryPage.seeCartQty()
    cartPage.removeItemByDescription(description)
});

When("click in checkout", () => {
    cartPage.seeCartQty()
    cartPage.clickCheckout()
});

And("fill in first name", () => {
    informationPage.fillFirstName()
});

And("fill in last name", () => {
    informationPage.fillLastName()
});

And("fill in postal code", () => {
    informationPage.fillPostalCode()
});

And("click in continue", () => {
    informationPage.clickOnBtnContinue()
});

And("check purchase values {}", (price) => {
    overviewPage.checkValues(price)
})

And("click in finish", () => {
    overviewPage.seeOverviewElements()
    overviewPage.clickOnBtnFinish()
});

Then("confirmed order message should be displayed", () => {
    confirmationPage.seeConfirmationElements()
});

Then("the checkout button will be hidden", () => {
    cartPage.seeHiddenCheckoutButton()
});

