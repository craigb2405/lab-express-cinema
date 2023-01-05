const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.model')

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));




router.get('/movies', (req, res) => {
    Movie.find()
      .then(movies => {
        res.render('movies', {movies});
      })
      .catch(error => {
        console.log(error);
      });
  });

router.get('/movies/:movieId', (req, res)=>{
  console.log(req.params)
  Movie.findById(req.params.movieId)
  .then((result)=>{
    console.log(result)
    res.render('movie-details', result)
  })
})  

module.exports = router;
