import express from "express"
import cors from "cors";
import bcrypt from "bcrypt";
import {connectDB} from "./db/db.js";
import router from "./routes/app.routes.js";

let forgotPasswordOTP;
let signupPasswordOTP;

const app = express();
const port = 8080;

app.use(express.json());


connectDB();

app.use(cors({
    origin: '*'
}));

app.use(router)


app.listen(port, ()=>{
    console.log(`Server running on port ${port}`);
});