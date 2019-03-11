// const { login } = require('./user');
const delay = require('mocker-api/utils/delay');

const noProxy = process.env.NO_PROXY === 'true';

const proxy = {
    'GET /api/step1': (req, res) => {
        console.log('-1--->', req.params);
        return res.json({
            id: req.params.id,
            list: [
                { name: 'Italy', capital: 'Rome', id: 1 },
                { name: 'Great Britan', capital: 'London', id: 2 },
                { name: 'Spain', capital: 'Madrid', id: 3 }
            ]
        });
    },
    'GET /api/step2': (req, res) => {
        console.log('-2--->', req.params);
        return res.json({
            id: req.params.id,
            list: [
                { name: 'Colosseum', ticket: '5$', id: 1 },
                { name: 'Trevi Fountain', ticket: 'free', id: 2 },
                { name: 'Roman Forum', ticket: '10$', id: 3 }
            ]
        });
    }
};
module.exports = noProxy ? {} : delay(proxy, 1000);
// module.exports = proxy;
