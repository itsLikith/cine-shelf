import {CineShelfUsers} from "../models/user.model.js";
import sendEmail from "../utils/nodemailer.js";
import randomNumber from "../constants/randomNumber.js";
import bcrypt from "bcrypt";

let otpSent;

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

const verifyMail = async (req, res) => {
  const { email } = req.body;
  if (!email) {
    return res.status(400).json({ error: "Email is required", flag: 1 });
  }
  try {
    const user = await CineShelfUsers.findOne({ email: email });
    if (user) {
      return res.json({error: "Email already exist", flag: 1});
    } else {
      otpSent = randomNumber();
      console.log(otpSent)
      //sendEmail(email,"Signup - CineShelf",`Your OTP to register to CineShelf is ${otpSent}`);
      return res.json({emailSent: true});
    }
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: "Internal server Error" });
  }
};


const verifyOTP = async (req,res) => {
  const {otp} = req.body;
  console.log(`otp sent is: ${otpSent}`);
  console.log(`received from frontend otp:${otp}`);
  if(!otp) {
    return res.status(400).json({ error: "OTP is required" });
  }
  if(otpSent != otp) {
    return res.json({error: "Invalid otp",flag: 1});
  }
  if(otpSent == otp) {
    return res.json({otpVerified: true});
  }
}

const registerUser  = async (req, res) => {
  const { email,password } = req.body;
  if (!password) {
    return res.status(400).json({ error: "Password field is required!" });
  }
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new CineShelfUsers({
      email,
      password: hashedPassword
    });
    const regUser  = await user.save();
    if(regUser) {
      return res.json({userRegistered: true});
    }
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: "Internal Server Error" });
  }
};

export { loginUser, registerUser, verifyMail, verifyOTP };