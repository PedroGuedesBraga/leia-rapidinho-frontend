import { SEM_JOGO, BUSCA_PALAVRAS, PREPARAR, JOGAR, FINALIZAR } from '../actions/actionTypes';

const INITIAL_STATE = {
    status: 'SEM_JOGO',
    words: [],
    currentWord: '',
    totalWords: 0,
    currentCount: 0
}

export const gameReducer = (state = INITIAL_STATE, action) => {
    console.log("Action " + JSON.stringify(action))
    switch (action.type) {
        case BUSCA_PALAVRAS:
            return {
                ...state,
                status: 'BUSCANDO_PALAVRAS'
            }
        case PREPARAR:
            return {
                ...state,
                status: 'PREPARANDO',
                words: action.data,
                totalWords: action.data.length
            }
        case JOGAR:
            if (state.words.length === 0) {
                return {
                    ...state,
                    currentCount: state.currentCount + 1,
                    status: 'FINALIZADO'
                }
            }
            const wordsList = Array.from(state.words);
            const currentWord = wordsList.shift();
            console.log('Atualizando palavra atual: ' + currentWord)
            return {
                ...state,
                status: 'JOGANDO',
                words: wordsList,
                currentWord,
                currentCount: state.totalWords - wordsList.length

            }
        case FINALIZAR:
            return {
                ...state,
                status: 'FINALIZADO'
            }
        default:
            return INITIAL_STATE;
    }
}