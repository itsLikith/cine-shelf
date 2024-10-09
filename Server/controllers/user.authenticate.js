import {CineShelfUsers} from "../models/user.model.js";
import bcrypt from "bcrypt";

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ error: "Email and password are required" });
  }
  try {
    const user = await CineShelfUsers.findOne({ email });
    if (!user) {
      return res.status(401).json({ error: "Invalid email or password", flag: 1 });
    }
    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) {
      return res.status(401).json({ error: "Invalid email or password", flag: 1 });
    }
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: "Internal Server Error" });
  }
};

const registerUser  = async (req, res) => {
  const { email,password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ error: "Email, password, and pfp are required" });
  }
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new CineShelfUsers({
      email,
      password: hashedPassword
    });
    const regUser  = await user.save();
    res.json(regUser );
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: "Internal Server Error" });
  }
};

const verifyMail = async (req, res) => {
  const { email } = req.body;
  if (!email) {
    return res.status(400).json({ error: "Email is required" });
  }
  try {
    const user = await CineShelfUsers.findOne({ email: email });
    if (user) {
      res.json(user);
    } else {
      return res.status(401).json({ error: "Email not exist", flag: 1 });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: "Internal server Error" });
  }
};

const verifyOTP = async (req,res) => {
  const {otp} = req.body;
  if(!otp) {
    return res.status(400).json({ error: "OTP is required" });
  }
}

const setPassword = async (req,res) => {
  const {email,password} = req.body;
  
}

export { loginUser, registerUser, verifyMail };