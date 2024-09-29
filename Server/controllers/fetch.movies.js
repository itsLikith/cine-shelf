import { connectDB } from "../db/db.js";

const fetchMovies = async () => {
    try {
      const movies = await movies.find({});
      console.log(movies);
    } catch (error) {
      console.error(`Error fetching movies: ${error}`);
    }
};

export { fetchMovies }