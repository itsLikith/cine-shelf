import { Router } from "express";
import { loginUser,registerUser,verifyMail } from "../controllers/user.authenticate.js";
import { addMovie } from "../controllers/add.content.js";
import { getMovie } from "../controllers/get.content.js";

const router = Router();

router.route('/login').post(loginUser);
router.route('/register').post(registerUser);
router.route('/verifyMail').post(verifyMail);
router.route('/addMovie').post(addMovie)
router.route('/getMovie').post(getMovie);

export default router;