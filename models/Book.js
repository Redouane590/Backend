const mongoose = require("mongoose");

const bookSchema = mongoose.Schema({
  userId: String,
  title: String,
  author: String,
  imageUrl: String,
  year: Number,
  genre: String,
  averageRating: Number,
  ratings: [
    {
      userId: String,
      grade: { type: Number, min: 0, max: 5 },
    },
  ],
});

module.exports = mongoose.model("Book", bookSchema);
