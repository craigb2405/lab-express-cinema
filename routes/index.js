const express = require('express');
const router = express.Router();
const Movie = require('../models/Movies.model')

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));


// router.get('/movies', (req, res) => {
//     Movie.find()
//         .then(result) => {
//             console.log(result)
//             res.render('movies.hbs', result)
//         })
//         .catch(error => {
//             console.log(error)
//         })

router.get('/movies', (req, res) => {
    Movie.find()
      .then(movies => {
        res.render('movies', { movies });
      })
      .catch(error => {
        console.log(error);
      });
  });
    

module.exports = router;
