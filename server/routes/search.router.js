const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const BASE_URL = 'https://api.giphy.com/v1/gifs/';
const API_KEY = process.env.API_KEY;
const axios = require('axios');


// let searchParam;
// router.get('/',(req.res) => {
//     axios({
//         method:'GET',
//         url:`${BASE_URL}search?q=${searchParam}&api_key=${API_KEY}&limit=1
//     }).then
// })
// return all search results
router.get('/', (req, res) => {
    const search = req.query.q;

    axios({ 
        method: 'GET',
        url: `${BASE_URL}search?q=${search}&api_key=${API_KEY}&limit=1`
    }).then((responseFromGiphy) => {
        console.log(responseFromGiphy.data.data);
        
        res.send(responseFromGiphy.data.data);
    }).catch((error) => {
        console.log('Error in server Get', error);
        res.sendStatus(500);
    })
});

router.post('/', (req, res) => {
    const favorite = req.body;
    console.log(favorite);

})

module.exports = router;