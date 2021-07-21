export const loginUser = (token) => {
    localStorage.setItem('LR_USR_TKN', token);
}

export const logoutUser = () => {
    localStorage.removeItem('LR_USR_TKN');
}

export const isLoggedIn = () => {
    const token = localStorage.getItem('LR_USR_TKN')
    return token !== null;
}