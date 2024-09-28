import express from "express"
import { connectDB as db } from "./config/db.js";
const app = express();
const port = 8080;

app.use(express.json(
    {limit : "20kb"}
))

app.use(express.urlencoded({ 
    extended: true,
    limit : "20kb"
}));

db();

app.listen(port, ()=>{
    console.log(`Server running on port ${port}`);
});