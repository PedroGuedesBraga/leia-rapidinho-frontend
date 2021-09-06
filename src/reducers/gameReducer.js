import { SEM_JOGO, BUSCA_PALAVRAS, PREPARAR, JOGAR, FINALIZAR, NOVA_PARTIDA, SALVAR_JOGO } from '../actions/actionTypes';

const INITIAL_STATE = {
    status: 'SEM_JOGO',
    words: [],
    currentWord: '',
    totalWords: 0,
    currentCount: 0,
    totalTime: 0,
    level: 0,
    wordsRead: new Array()
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
            console.log(JSON.stringify(action.data))
            return {
                ...state,
                status: 'PREPARANDO',
                words: action.data.words,
                totalWords: action.data.words.length,
                totalTime: action.data.totalTime,
                level: action.data.level
            }
        case JOGAR:
            if (state.status === 'SALVANDO' || state.status === 'FINALIZADO') {
                return state;
            }
            if (state.words.length === 0) {
                return {
                    ...state,
                    currentCount: state.currentCount + 1,
                    status: 'SALVANDO'
                }
            }

            const wordsList = [...state.words]
            const currentWord = wordsList.shift();
            let wordsRead = [...state.wordsRead]
            console.log('palavras lidas: ' + wordsRead)
            if (action.data) {
                console.log('lendo: ' + action.data)
                wordsRead = [...wordsRead, action.data];
                console.log('Palavras lidas ' + wordsRead)
            }
            return {
                ...state,
                status: 'JOGANDO',
                words: wordsList,
                currentWord,
                currentCount: wordsRead.length,
                wordsRead
            }
        case SALVAR_JOGO:
            console.log('Salvando jogo =>')
            return {
                ...state,
                status: 'SALVANDO'
            }
        case FINALIZAR:
            return {
                ...state,
                status: 'FINALIZADO',
                saveGameLoader: true
            }
        case NOVA_PARTIDA:
        default:
            return INITIAL_STATE;
    }
}