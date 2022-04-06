class LoginElements {

    loginArea = () => { return '.login_wrapper' }
    username = () => { return '[data-test="username"]' }
    password = () => { return '[data-test="password"]' }
    btnLogin = () => { return '[data-test="login-button"]' }
    msgError = () => { return '[data-test="error"]' }
}

export default LoginElements;  