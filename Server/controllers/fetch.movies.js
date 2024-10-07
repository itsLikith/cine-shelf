import { connectDB } from "../db/db.js";
import movie from "../models/movie.model.js";

const fetchMovies = async () => {
    try {
      const movies = await movies.find({});
      console.log(movies);
    } catch (error) {
      console.error(`Error fetching movies: ${error}`);
    }
};

const addMovie = async () => {
  try{
    const {movie, director} = req.body;
    const newMovie = new movie({
      movie

    });
    await newMovie.save();
  }
  catch(error){
    console.error("done");
  }
}

export { fetchMovies }