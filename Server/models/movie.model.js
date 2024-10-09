import mongoose from 'mongoose';

const movieSchema = new mongoose.Schema({
  movieID: {
    type: Number,
    unique: true,
    required: true
  },
  movieName: {
    type: String,
    required: true
  },
  director: {
    type: String,
    required: true
  },
  musicDirector: {
    type: String
  },
  cast: {
    type: Object,
    leadActor: {
      type: String,
      required: true
    },
    leadActress: {
      type: String
    }
  },
  genre: {
    type: [String],
    required: true
  },
  description: {
    type: String,
    required: true
  },
  duration: {
    type: String,
    required: true
  },
  ageRating: {
    type: String,
    required: true
  },
  rating: {
    type: String,
    required: true
  },
  moviePoster: {
    type: String,
    required: true
  },
  movieAssetLocation: {
    type: String,
    required: true
  }
});

const Cine = mongoose.model('Cine', movieSchema);
export {Cine};