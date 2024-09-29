import { connectDB } from "../db/db";

const fetchBooks = async () => {
    try {
        const books = await books.find({});
        console.log(books);
    } catch (error) {
        console.error(`Error fetching books: ${error}`);
    }
}

export { fetchBooks };