import mongoose from 'mongoose';

const movieSchema = new mongoose.Schema({
  movieName: {
    type: String,
    required: true,
  },
  director: {
    type: String,
    required: true,
  },
  musicDirector: {
    type: String,
  },
  cast: {
    actor: {
      type: String,
      required: true,
    },
    actress: {
      type: String,
    },
    supportingActors: [String],
    producer: {
      type: String,
    },
  },
  productionBanner: {
    type: String,
  },
  genre: [String],
  moviePoster: {
    type: String,
  },
  movieAssetLocation: {
    type: String,
  },
  releaseDate: {
    type: Date,
  },
  duration: {
    type: String,
  },
  language: {
    type: String,
  },
  ageRating: {
    type: String,
  },
  description: {
    type: String,
  },
  trailerUrl: {
    type: String,
  },
  subtitleLanguages: [String],
  audioLanguages: [String],
  views: {
    type: Number,
    default: 0,
  },
  rating: {
    type: Number,
    default: 0,
  },
  tags: [String],
  availableResolutions: [String],
  awards: {
    type: [String],
  },
  watched: {
    type: String,
    enum: ['w','nw'],
    default: 'nw'
  }
});

const movie = mongoose.model('movies', movieSchema);
export {movie};