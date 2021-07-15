import { SUCESSO_REGISTRO, ERRO_REGISTRO } from '../actions/actionTypes';

const INITIAL_STATE = {
    toast: {
        status: 'registering',
        toastHeader: "",
        toastContent: ""
    }
}

export const registerReducer = (state = INITIAL_STATE, action) => {
    if (action.type === SUCESSO_REGISTRO) {
        return {
            status: action.payload.status,
            toastHeader: action.payload.toastHeader,
            toastContent: action.payload.toastContent
        }
    } else if (action.type === ERRO_REGISTRO) {
        return {
            status: action.payload.status,
            toastHeader: action.payload.toastHeader,
            toastContent: action.payload.toastContent
        }
    } else {
        return state;
    }
}