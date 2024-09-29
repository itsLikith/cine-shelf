import { connectDB } from "../db/db.js";
import {bodyParser} from "body-parser"
import randomNumber from "../constants/randomNumber.js";
import bcrypt from "bcrypt";

const registerUser = async (req,res) => {
    const {email,otp,password} = req.body;
    
}