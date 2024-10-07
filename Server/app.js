import express from "express"
import cors from "cors";
import bcrypt from "bcrypt";
import {connectDB} from "./db/db.js";
import User from "./models/user.model.js";
import { saltRounds } from "./constants/saltRounds.js";
import { registerUser } from "./controllers/user.authenticate.js";

let forgotPasswordOTP;
let signupPasswordOTP;

const app = express();
const port = 8080;

app.use(express.json());


connectDB();

app.use(cors({
    origin: '*'
}));

app.post('/register',registerUser);

app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {  
      const user = await User.findOne({ email, password });
      if (!user) {
        return res.status(401).json({ error: 'Invalid email or password', flag : 1});
      }
      res.json(user); 
    } catch (error) {
      console.error(error);
      res.status(500).send({ error: 'Internal Server Error' });
    }
});


app.listen(port, ()=>{
    console.log(`Server running on port ${port}`);
});