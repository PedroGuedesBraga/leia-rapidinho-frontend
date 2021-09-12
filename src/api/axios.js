import axios from 'axios';

const instance = axios.create();

instance.interceptors.response.use(undefined, async (err) => {
    if (err.response.status === 403) {
        localStorage.removeItem('LR_USR_TKN');
        window.location.reload();
    }
    throw err;
});

export default instance;

