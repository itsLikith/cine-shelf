import { Router } from "express";
import { loginUser,registerUser,verifyMail,verifyOTP } from "../controllers/user.authenticate.js";
import { addMovie,addBook } from "../controllers/add.content.js";
import { getMovie,getBook } from "../controllers/get.content.js";

const router = Router();

// Login
router.route('/login').post(loginUser);

// Sign Up
router.route('/verifyMail').post(verifyMail);
router.route('/verifyOTP').post(verifyOTP);
router.route('/register').post(registerUser);

// Admin Content
router.route('/addMovie').post(addMovie);
router.route('/addBook').post(addBook);

// User Access Content
router.route('/getMovie').post(getMovie);
router.route('/getBook').post(getBook);

export default router;