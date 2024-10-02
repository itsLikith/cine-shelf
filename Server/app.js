import express from "express"
import cors from "cors";
import bodyParser from "body-parser";
import bcrypt from "bcrypt";
import connectDB from "./db/db.js";
import Users from "./models/user.model.js";

const app = express();
const port = 8080;
const saltRounds = 10;

app.use(express.json(
    {limit : "20kb"}
))

app.use(bodyParser.urlencoded({extended: true}));

connectDB();

app.use(cors({
    origin: 'http://cineshelf.in:3000'
}));

app.post("/login", async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await Users.findOne({ username: username });
        if (user) {
            const isMatch = await bcrypt.compare(password, user.password);
            if (isMatch) {
                res.status(200).send("<h1>login success</h1>");
            } else {
                res.status(401).json({ message: 'Invalid credentials' });
            }
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});


app.listen(port, ()=>{
    console.log(`Server running on port ${port}`);
});