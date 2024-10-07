import { connectDB } from "../db/db.js";
import randomNumber from "../constants/randomNumber.js";
import bcrypt from "bcrypt";
import user from "../models/user.model.js";

const registerUser = async (req,res) => {
    const {email,pfp,password} = req.body;
    const newUser = new user (
        {
            email : email,
            pfp : pfp,
            password : password
        }
    );
    const regUser = await newUser.save();
    res.json(regUser);
}

export {registerUser};