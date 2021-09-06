import { SALVAR_JOGO, BUSCA_PALAVRAS, PREPARAR, JOGAR, FINALIZAR, NOVA_PARTIDA } from './actionTypes';
import { buscarPalavras, salvarJogo } from '../api/game';

export const getWords = (dispatch) => {
    return async (email) => {
        try {
            dispatch({ type: BUSCA_PALAVRAS });
            const response = await buscarPalavras(email);
            dispatch({ type: PREPARAR, data: response });
        } catch (err) {
            console.log(`Ocorreu um erro ao tentar recuperar as palavras => ${JSON.stringify(err)}`);
        }
    }
}

export const saveGame = (dispatch) => {
    return async (level, score, wordsRead) => {
        try {
            console.log('Chamando action de salvar jogo')
            dispatch({ type: SALVAR_JOGO })
            await salvarJogo(level, wordsRead);
        } catch (err) {
            console.log(`Ocorreu um erro ao tentar salvar jogo => ${err}}`);
        }
        dispatch({ type: FINALIZAR });
    }
}

export const play = (dispatch) => {
    return (word) => {
        console.log('Lendo na action: ' + word)
        dispatch({ type: JOGAR, data: word })
    }
}

export const startNewGame = (dispatch) => {
    return () => dispatch({ type: NOVA_PARTIDA })
}

export const endGame = (dispatch) => {
    return () => dispatch({ type: SALVAR_JOGO })
}