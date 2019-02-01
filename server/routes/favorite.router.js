const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

// return all favorite images
router.get('/', (req, res) => {
  const queryText = `SELECT * FROM "favorites";`
  pool.query(queryText).then((result)=>{
    console.log('in result', result);
    res.send(result.rows);
    res.sendStatus(200);
  }).catch((error)=>{
    console.log('in error', error);
  })
});

// add a new favorite 
router.post('/', (req, res) => {
  const newFavorite = req.body;
  const queryText = `INSERT INTO favorites ("url")
                    VALUES ($1)`;
  const queryValues = [
    newFavorite];
  pool.query(queryText, queryValues)
    .then(() => { res.sendStatus(201); })
    .catch((err) => {
      console.log('Error completing SELECT plant query', err);
      res.sendStatus(500);
    });
});

// update given favorite with a category id
router.put('/:favId', (req, res) => {
  // req.body should contain a category_id to add to this favorite image
  res.sendStatus(200);
});

// delete a favorite
router.delete('/', (req, res) => {
  res.sendStatus(200);
});

module.exports = router;
