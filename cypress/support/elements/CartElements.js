class CartElements {

    cartList = () => { return '.cart_list' }
    btnContinue = () => { return '[data-test="continue-shopping"]' }
    btnCheckout = () => { return '[data-test="checkout"]' }
    btnRemove = (description) => { return `[data-test="remove-${description}"]` }
    qtdItem = () => { return '.cart_quantity' }
    priceItem = () => { return '.inventory_item_price' }
}

export default CartElements;  