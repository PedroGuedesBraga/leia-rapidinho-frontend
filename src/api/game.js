import axios from 'axios';

export const buscarPalavras = async (email) => {
    try {
        const res = await axios.post('http://localhost:8090/words', { email: 'pedro.braga@ccc.ufcg.edu.br' });
        return res.data.map(wordObj => {
            return wordObj.word;
        });
    } catch (err) {
        const error = new Error('Erro ao tentar buscar palavras');
        throw error;
    }
}