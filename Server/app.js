import express from "express"
import cors from "cors";
import bodyParser from "body-parser";
import bcrypt from "bcrypt";
import connectDB from "./db/db.js";
import User from "./models/user.model.js";
import { saltRounds } from "./constants/saltRounds.js";

let forgotPasswordOTP;
let signupPasswordOTP;

const app = express();
const port = 8080;

app.use(bodyParser.urlencoded({extended: true}))

connectDB();

app.use(cors({
    origin: '*'
}));

app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {  
      const user = await User.findOne({ email, password });
      if (!user) {
        return res.status(401).send({ error: 'Invalid email or password' });
      }
      res.send("<h1>Login Successful</h1>");
      console.log("success")
    } catch (error) {
      console.error(error);
      res.status(500).send({ error: 'Internal Server Error' });
    }
});


app.listen(port, ()=>{
    console.log(`Server running on port ${port}`);
});