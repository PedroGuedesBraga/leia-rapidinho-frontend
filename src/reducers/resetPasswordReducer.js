import {
    INICIO_RESET_SEND,
    SUCESSO_RESET_SEND,
    ERRO_RESET_SEND,
    INICIO_RESET_VERIFY,
    SUCESSO_RESET_VERIFY,
    ERRO_RESET_VERIFY
} from '../actions/actionTypes';

const INITIAL_STATE = {
    status: 'not_started',
    toastHeader: null,
    toastMessage: null
}


export const resetReducer = (state = INITIAL_STATE, action) => {
    console.log("Action " + JSON.stringify(action))
    switch (action.type) {
        case INICIO_RESET_SEND:
            return {
                ...state,
                status: action.payload.status
            }
        case SUCESSO_RESET_SEND:
            return {
                ...state,
                status: action.payload.status,
                toastHeader: action.payload.toastHeader,
                toastMessage: action.payload.toastContent
            }
        case ERRO_RESET_SEND:
            return {
                ...state,
                status: action.payload.status,
                toastHeader: action.payload.toastHeader,
                toastMessage: action.payload.toastContent
            }
        case INICIO_RESET_VERIFY:
            return {
                ...state,
                status: action.payload.status
            }
        case SUCESSO_RESET_VERIFY:
            return {
                ...state,
                status: action.payload,
                toastHeader: action.payload.toastHeader,
                toastMessage: action.payload.toastContent
            }
        case ERRO_RESET_VERIFY:
            return {
                ...state,
                status: action.payload,
                toastHeader: action.payload.toastHeader,
                toastMessage: action.payload.toastMessage
            }
        default:
            return INITIAL_STATE;
    }
}