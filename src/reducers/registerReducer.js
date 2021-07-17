import { SUCESSO_REGISTRO, ERRO_REGISTRO, INICIO_REGISTRO } from '../actions/actionTypes';

const INITIAL_STATE = {
    status: 'registering',
    toastHeader: "",
    toastContent: ""
}

export const registerReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SUCESSO_REGISTRO:
            return {
                status: action.payload.status,
                toastHeader: action.payload.toastHeader,
                toastContent: action.payload.toastContent
            };
            break;
        case ERRO_REGISTRO:
            return {
                status: action.payload.status,
                toastHeader: action.payload.toastHeader,
                toastContent: action.payload.toastContent
            }
        case INICIO_REGISTRO:
            return {
                ...state,
                status: action.payload.status
            }
        default:
            return state;
            break;
    }
}