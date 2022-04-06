
import InventoryPage from '../pageobjects/InventoryPage';
const inventoryPage = new InventoryPage

//add item by id
When ("add item id {}", (id) => {
    inventoryPage.seeInventoryElements()
    inventoryPage.checkPriceItem(id)  
    inventoryPage.addItems(id)  
 });

 //add item by description
When ("add item with description {}", (description) => {
    inventoryPage.seeInventoryElements()
    inventoryPage.addItemsByDescription(description)  
 });