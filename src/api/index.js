import axios from 'axios';
import { locations, step2Map, ticketInfoMap } from '../../mocker/mockData';
const prod = process.env.NODE_ENV === 'production';
export default {
    step1() {
        return prod
            ? Promise.resolve({ data: { list: locations } })
            : axios.get('/api/step1');
    },
    step2(id) {
        return prod
            ? Promise.resolve({ data: { list: step2Map[id] } })
            : axios.get(`/api/step2/${id}`);
    },
    step3(id) {
        return prod
            ? Promise.resolve({ data: { list: ticketInfoMap[id] } })
            : axios.get(`/api/step3/${id}`);
    }
};
