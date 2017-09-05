

let login = {
    login: false,
    autoLogin: false,
    
}

const LoginReducer = (state = login, action) => {
    switch (action.type) {
        case 'login': {
            return { ...state, login: true }
        }
        case 'autologin': {
            const isAutoLogin = !state.autoLogin;
            return { ...state, autoLogin: isAutoLogin }
        }
        default: return state
    }
}
export default LoginReducer;