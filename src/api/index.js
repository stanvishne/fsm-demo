import axios from 'axios';

export default {
    step1() {
        return axios.get('/api/step1');
    },
    step2(id) {
        return axios.get(`/api/step2/${id}`);
    },
    step3(id) {
        return axios.get(`/api/step3/${id}`);
    }
};
