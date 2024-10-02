import mongoose from 'mongoose';
import { person } from './person.model';

const movieSchema = new mongoose.Schema({
  movieName: {
    type: String,
    required: true,
  },
  director: person,
  musicDirector: person,
  cast: {
    actor: person,
    actress: person,
    supportingActors: [person],
    producer: person,
  },
  productionBanner: {
    type: String,
  },
  genre: [String],
  moviePosterUrl: {
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
    default: 0
  },
  tags: [String],
  awards: {
    type: [String]
  },
  watched: {
    type: String,
    enum: ['w','nw'],
    default: 'nw'
  }
});

const movie = mongoose.model('movies', movieSchema);
export { movie };