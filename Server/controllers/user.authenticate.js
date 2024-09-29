import { connectDB } from "../db/db.js";
import bcrypt from "bcrypt";

connectDB();

const authenticateUser = async (req,res) => {
    const {username,password} = req.body;
    try {
        const user = await users.find({username: `${username}`});
        console.log(user);
        const StoredhashPassword = await user.password;
        const isMatch = await bcrypt.compare(password,StoredhashPassword)
        if (isMatch) {
            console.log(`right credentials`);
        } else {
            console.error(`invalid credentials`);
        }
    } catch (error) {
        console.error(error);
    }
}

export { authenticateUser };