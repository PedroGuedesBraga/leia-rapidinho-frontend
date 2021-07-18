import { SUCESSO_LOGIN, ERRO_LOGIN, INICIO_LOGIN } from '../actions/actionTypes';
import axios from 'axios';

export const login = (dispatch) => {
    return (user) => {
        console.log('Realizando login do usuario ' + JSON.stringify(user));
        dispatch({
            type: INICIO_LOGIN,
            payload: {
                status: 'ongoing'
            }
        }
        );
        axios.post('http://localhost:8090/users/login', user).then(res => {
            console.log('sucesso no login', res)
            dispatch({
                type: SUCESSO_LOGIN,
                payload: {
                    status: 'success'
                }
            }
            );
        }
        ).catch(err => {
            console.log('erro no login', err)
            dispatch({
                type: ERRO_LOGIN,
                payload: {
                    status: 'error',
                    toastHeader: "Houve um erro",
                    toastContent: "Verifique se as credencias estão corretas e tente novamente"
                }
            }
            );
        })
    }
}