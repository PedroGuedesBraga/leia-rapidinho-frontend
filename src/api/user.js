import axios from './axios';
import { loginUser, getToken } from '../utils';

export const verifyEmail = async (email, token) => {
    try {
        const data = { email, token }
        await axios.get(`http://localhost:8090/users/verify?email=${email}&token=${token}`);
    } catch (err) {
        console.log(`Ocorreu um erro ao tentar verificar o email. [${JSON.stringify(err)}]`)
        throw err;
    }
}

export const getProfile = async () => {
    try {
        const token = getToken();
        const response = await axios.get(`http://localhost:8090/users/profile`, {
            headers: {
                'x-access-token': token
            }
        });
        return response.data;
    } catch (err) {
        console.log('Ocorreu um erro ao tentar carregar perfil', err);
        throw new Error('Erro ao tentar recuperar perfil');
    }
}

export const authenticate = async (user) => {
    console.log('Realizando login do usuario ' + JSON.stringify(user));
    try {
        const response = await axios.post('http://localhost:8090/users/login', user);
        const { access_token } = response.data;
        loginUser(access_token);
    } catch (err) {
        throw new Error('Erro ao tentar logar');
    }
}

export const createAccount = async (user) => {
    try {
        await axios.post('http://localhost:8090/users/register', user);
        return { success: true }
    } catch (err) {
        const error = new Error('Erro ao tentar criar conta.');
        const emailAlreadyExists = err.response && err.response.status === 409;
        error.emailAlreadyExists = emailAlreadyExists;
        throw error;
    }
}