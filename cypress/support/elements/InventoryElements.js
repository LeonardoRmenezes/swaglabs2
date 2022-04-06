

class InventoryElements {

    menu = () => { return '#react-burger-menu-btn' }
    appLogo = () => { return '.app_logo' }
    title = () => { return '.title' }
    inventoryList = () => { return '[class=inventory_container]' }
    shoppingCart = () => { return '[class=shopping_cart_link]' }
    shoppingCartQtd = () => { return '.shopping_cart_badge' }
    selectOrder = () => { return '[data-test="product_sort_container"]' }
    modalItem = () => { return '.inventory_list > :nth-child(1)' }
    footer = () => { return '.footer' }
    btnCancel = () => { return '[data-test="cancel"]' }

    addItemsByItem = (id) => { return `:nth-child(${id}) > :nth-child(2) > :nth-child(2) > :nth-child(2)` }
    addItemsByDescription = (description) => { return `[data-test="add-to-cart-${description}"]` }

    removeItems = () => { return '[data-test="remove-sauce-labs-backpack"]' }
    removeItemsByDescription = (description) => { return `[data-test="remove-${description}"]` }

}
export default InventoryElements; 
