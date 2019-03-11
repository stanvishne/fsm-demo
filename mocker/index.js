// const { login } = require('./user');
const delay = require('mocker-api/utils/delay');

const noProxy = process.env.NO_PROXY === 'true';

const { step2Map, ticketInfoMap, locations } = require('./mockData');

const proxy = {
    'GET /api/step1': (req, res) => {
        return res.json({
            id: req.params.id,
            list: locations
        });
    },
    'GET /api/step2/:id': (req, res) => {
        return res.json({
            id: req.params.id,
            list: step2Map[req.params.id]
        });
    },
    'GET /api/step3/:id': (req, res) => {
        return res.json({
            id: req.params.id,
            list: ticketInfoMap[req.params.id]
        });
    }
};
module.exports = noProxy ? {} : delay(proxy, 500);
