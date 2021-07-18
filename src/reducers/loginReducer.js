import { SUCESSO_LOGIN, ERRO_LOGIN, INICIO_LOGIN } from '../actions/actionTypes';

const INITIAL_STATE = {
    status: 'logging_in',
    toastHeader: "",
    toastContent: ""
}

export const loginReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SUCESSO_LOGIN:
            return {
                status: action.payload.status,
            };
            break;
        case ERRO_LOGIN:
            return {
                status: action.payload.status,
                toastHeader: action.payload.toastHeader,
                toastContent: action.payload.toastContent
            }
        case INICIO_LOGIN:
            return {
                ...state,
                status: action.payload.status
            }
        default:
            return state;
            break;
    }
}