import express from "express"
import { connectDB } from "./config/db.js";
import movies from "./models/movie.model.js";
import movies from "./models/movie.model.js";
const app = express();
const port = 8080;

app.use(express.json(
    {limit : "20kb"}
))

app.use(express.urlencoded({ 
    extended: true,
    limit : "20kb"
}));

connectDB();

const fetchMovies = async () => {
    try {
      const movies = await movies.find({});
      console.log(movies);
    } catch (error) {
      console.error(`Error fetching movies: ${error}`);
    }
};



const fetchMagazines = async () => {
    try {
        const magazines = await magazines.find({});
        console.log(magazines);
    } catch (error) {
        console.error(`Error fetching books: ${error}`);
    }
}

export { 
    fetchMovies,
    fetchBooks,
    fetchMagazines
}


app.listen(port, ()=>{
    console.log(`Server running on port ${port}`);
});