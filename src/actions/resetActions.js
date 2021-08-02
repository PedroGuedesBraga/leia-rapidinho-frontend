import {
    INICIO_RESET_SEND,
    SUCESSO_RESET_SEND,
    ERRO_RESET_SEND,
    INICIO_RESET_VERIFY,
    SUCESSO_RESET_VERIFY,
    ERRO_RESET_VERIFY
} from './actionTypes';
import axios from 'axios';

export const sendToken = (dispatch) => {
    return async (email) => {
        console.log('Enviando token...')
        dispatch({
            type: INICIO_RESET_SEND,
            payload: {
                status: 'ongoing'
            }
        });
        try {
            await axios.post('http://localhost:8090/users/reset/send', { email });
            dispatch({
                type: SUCESSO_RESET_SEND,
                payload: {
                    status: 'sendSuccess',
                    toastHeader: 'Quase lá!',
                    toastContent: `Foi enviado um token para o e-mail ${email}`
                }
            });
        } catch (err) {
            console.log(`Ocorreu um erro ao tentar validar o token: ${JSON.stringify(err)}`);
            dispatch({
                type: ERRO_RESET_SEND,
                payload: {
                    status: 'sendError',
                    toastHeader: 'Quase lá!',
                    toastContent: 'Ocorreu um erro ao tentar enviar o token. Espere alguns segundos e tente novamente'
                }
            });
            throw err;
        }
    }
}

export const resetPassword = (dispatch) => {
    return async (email, newPassword, token) => {
        console.log('Enviando token...')
        dispatch({
            type: INICIO_RESET_VERIFY,
            payload: {
                status: 'ongoing'
            }
        });
        try {
            await axios.post('http://localhost:8090/users/reset/validate', { email, newPassword, token });
            dispatch({
                type: SUCESSO_RESET_VERIFY,
                payload: {
                    status: 'verifySuccess',
                    toastHeader: 'Sucesso',
                    toastContent: 'Sua senha foi redefinida com sucesso!'
                }
            });
        } catch (err) {
            console.log(`Ocorreu um erro ao tentar validar o token: ${JSON.stringify(err)}`);
            dispatch({
                type: ERRO_RESET_VERIFY,
                payload: {
                    status: 'verifyError',
                    toastHeader: 'Ocorreu um erro',
                    toastContent: 'Ocorreu um erro na validação do token. Espere alguns segundos e tente novamente'
                }
            });
            throw err;
        }
    }
}