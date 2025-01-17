const { Schema, model } = require('mongoose');

const moviesSchema = new Schema(
  {
    title: String,
    director: String,
    stars: Array,
    image: String,
    description: String,
    showtimes: Array
  },
  {
    timestamps: true
  }
);

module.exports = model('Movie', moviesSchema);