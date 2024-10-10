import { Cines } from "../models/content.model.js";

const addMovie = async (req, res) => {
    const {
        movieID, movieName, director, musicDirector, leadActor,
        leadActress, supportingRoles, genre, description, duration,
        ageRating, rating, moviePoster, movieAssetLocation
    } = req.body;

    try {
        const movie = new Cines({
            movieID,
            movieName,
            director,
            musicDirector,
            leadActor,
            leadActress,
            supportingRoles,
            genre,
            description,
            duration,
            ageRating,
            rating,
            moviePoster,
            movieAssetLocation
        });

        const addedMovie = await movie.save();
        res.json(addedMovie);
    } catch (error) {
        console.log(error);
        res.status(500).send("Error adding movie");
    }
}

const addBook = async (req,res) => {
    const { bookID } = req.body;
    try {
        
    } catch (error) {
        console.error(error)
    }
}

export {addMovie,addBook};