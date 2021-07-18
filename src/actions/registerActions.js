import { SUCESSO_REGISTRO, ERRO_REGISTRO, INICIO_REGISTRO } from './actionTypes'
import axios from 'axios';

export const success = () => {
    return {
        type: SUCESSO_REGISTRO,
        payload: {
            status: 'success',
            toastHeader: "Quase lá!",
            toastContent: "Enviamos um e-mail de confirmação para o endereço informado! Confirme seu e-mail!"
        }
    }
}

export const error = () => {
    return {
        type: ERRO_REGISTRO,
        payload: {
            status: 'error',
            toastHeader: "Houve um erro",
            toastContent: "Houve um erro ao tentar realizar o cadastro. Tente novamente após alguns minutos"
        }
    }
}

export const register = (dispatch) => {
    return (user) => {
        console.log('Realizando registro do usuario ' + JSON.stringify(user));
        dispatch({
            type: INICIO_REGISTRO,
            payload: {
                status: 'ongoing'
            }
        }
        );
        axios.post('http://localhost:8090/users/register', user).then(res => {
            console.log('sucesso no registro', res)
            dispatch({
                type: SUCESSO_REGISTRO,
                payload: {
                    status: 'success',
                    toastHeader: "Quase lá!",
                    toastContent: "Enviamos um e-mail de confirmação para o endereço informado! Confirme seu e-mail!"
                }
            }
            );
        }
        ).catch(err => {
            console.log('erro no registro', err)
            const userAlreadyExistsError = err.response && err.response.status && err.response.status === 409
            dispatch({
                type: ERRO_REGISTRO,
                payload: {
                    status: 'error',
                    toastHeader: "Houve um erro",
                    toastContent: userAlreadyExistsError ? "Usuário de email informado já existe"
                        :
                        "Houve um erro ao tentar realizar o cadastro. Tente novamente após alguns minutos"
                }
            }
            );
        })
    }
}




