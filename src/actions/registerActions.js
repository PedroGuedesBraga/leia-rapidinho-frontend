import { SUCESSO_REGISTRO, ERRO_REGISTRO } from './actionTypes'

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
