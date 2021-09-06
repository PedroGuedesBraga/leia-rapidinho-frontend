import axios from 'axios';

export const buscarPalavras = async (email) => {
    try {
        const res = await axios.post('http://localhost:8090/words', { email: 'pedro.braga@ccc.ufcg.edu.br' });
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
        console.log('Chamando api para salvar jogo')
        await axios.post('http://localhost:8090/saveGame', { email: 'pedro.braga@ccc.ufcg.edu.br', difficulty: level, wordsRead });
    } catch (err) {
        const error = new Error('Erro ao tentar salvar partida');
        console.log('Erro na api para salvar jogo ' + JSON.stringify(err))
        throw error;
    }
}