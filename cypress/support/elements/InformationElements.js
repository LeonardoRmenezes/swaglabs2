class InformationElements {

    txtFirstName = () => { return '[data-test="firstName"]' }
    txtLastName = () => { return '[data-test="lastName"]' }
    txtPostalCode = () => { return '[data-test="postalCode"]' }
    btnCancel = () => { return '[data-test="cancel"]' }
    btnContinue = () => { return '[data-test="continue"]' }
    msgError = () => { return '.error-message-container' }
}

export default InformationElements; 