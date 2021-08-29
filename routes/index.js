const express = require('express');
const axios = require('axios');

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello world');
})

router.get('/jokes', (req, res) => {
    const {type} = req.params
    const options = {
        method: 'GET',
        url: `https://official-joke-api.appspot.com/jokes/random`,
    }
    axios.request(options)
    .then(response => {
        if(response.data === []) {
            res.status(404).end(response.data)
        }
        res.send(response.data);
    })
})

router.get('/jokes/:type', (req, res) => {
    const {type} = req.params
    const options = {
        method: 'GET',
        url: `https://official-joke-api.appspot.com/jokes/${type}/random`,
    }
    axios.request(options)
    .then(response => {
        if(response.data.length === 0) {
            return res.status(404).send(res.data)
        }
        res.send(response.data);
    })
})

module.exports = router;