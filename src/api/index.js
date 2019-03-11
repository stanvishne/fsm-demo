import axios from 'axios';

export default {
    step1() {
        return axios.get('/api/step1');
    },
    step2() {
        return axios.get('/api/step2');
    }
};
