
export const Login = (status) => {
    return {
        type: 'login',
        status: status
    }
}

export const AutoLogin = (status) => {
    return {
        type: 'autologin',
        status: status
    }
}

export default Login;