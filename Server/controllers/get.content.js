import { Cines } from "../models/content.model.js";

const getMovie = async (req,res) => {
    const {movieID} = req.body;
    try {
        const movie = await Cines.findOne({movieID});
        if(!movie) {
            return res.status(401).json({ error: "Movie not found", flag: 1 });
        }
        return res.json(movie)
    } catch (error) {
        console.error(error);
    }
}

const getBook = async (req,res) => {
    const {bookID} = req.body;
    try {
        const book = await Shelfs.findOne({bookID});
        if(!book) {
            return res.status(401).json({ error: "Book not found", flag: 1 });
        }
        return res.json(book);
    } catch (error) {
        console.error(error);
    }
}

export { getMovie };