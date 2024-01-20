const mongoose = require('mongoose');

const bookSchema = mongoose.Schema({
  userId: String, //identifiant MongoDB unique de l'utilisateur qui a créé le livre
  title: String, // - titre du livre
  author: String, // - auteur du livre
  imageUrl: String, // - illustration/couverture du livre
  year: Number, // - année de publication du livre
  genre: String, // - genre du livre
  ratings: [
  {
  userId: String, // - identifiant MongoDB unique de l'utilisateur qui a noté le livre
  grade: { type: Number, min: 0, max: 5 }, // - note donnée à un livre
  }
  ], // - notes données à un livre
  averageRating: Number // - note moyenne du livre
});

module.exports = mongoose.model('Book', bookSchema);