import mongoose from 'mongoose';

const movieSchema = new mongoose.Schema({
  movieID: {
    type: Number,
    required: true,
    unique: true
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
    type: String,
    required: true
  },
  cast: {
    leadActor: {
      type: [String], // Array of strings for lead actors
      required: true
    },
    leadActress: {
      type: [String], // Array of strings for lead actresses
      required: true
    },
    supportingRoles: {
      type: [String], // Array of strings for supporting roles
      required: true
    }
  },
  genre: {
    type: [String], // Array of genres
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
    type: Number,
    required: true,
    min: 0,
    max: 5
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

const Cines = mongoose.model('Cines', movieSchema);


const bookSchema = new mongoose.Schema({
  bookID: {
    type: Number,
    unique: true,
    required: true
  }
});

const Shelfs = mongoose.model('Shelfs',bookSchema);

export { Cines,Shelfs };