import axios from './axios';
import { getToken } from '../utils/index';

export const buscarPalavras = async (email) => {
    try {
        const token = getToken();
        const res = await axios.post('http://localhost:8090/words', undefined, {
            headers: {
                'x-access-token': token
            }
        });
        const words = res.data.words.map(wordObj => {
            return wordObj.word;
        });
        return {
            words,
            totalTime: res.data.totalTime,
            level: res.data.level
        };
    } catch (err) {
        const error = new Error('Erro ao tentar buscar palavras');
        throw error;
    }
}

export const salvarJogo = async (level, wordsRead) => {
    try {
        const token = getToken();
        console.log('Chamando api para salvar jogo')
        await axios.post('http://localhost:8090/saveGame', { difficulty: level, wordsRead }, {
            headers: {
                'x-access-token': token
            }
        });
    } catch (err) {
        const error = new Error('Erro ao tentar salvar partida');
        console.log('Erro na api para salvar jogo ' + JSON.stringify(err))
        throw error;
    }
}