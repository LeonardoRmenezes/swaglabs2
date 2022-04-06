import InventoryPage from '../pageobjects/InventoryPage'
import LoginPage from '../pageobjects/LoginPage'
const loginPage = new LoginPage


Then("should display {}", (result) => {
    loginPage.testLogin(result)
});


