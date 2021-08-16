import { SEM_JOGO, BUSCA_PALAVRAS, PREPARAR, JOGAR, FINALIZAR } from './actionTypes';
import { buscarPalavras } from '../api/game';

export const getWords = (dispatch) => {
    return async (email) => {
        try {
            dispatch({ type: BUSCA_PALAVRAS });
            const words = await buscarPalavras(email);
            dispatch({ type: PREPARAR, data: words });
        } catch (err) {
            console.log(`Ocorreu um erro ao tentar recuperar as palavras => ${JSON.stringify(err)}`);
        }
    }
}

export const play = (dispatch) => {
    return () => {
        dispatch({ type: JOGAR })
    }
}