import { Router } from "express";
import { loginUser,registerUser,verifyMail } from "../controllers/user.authenticate.js";

const router = Router();

router.route('/login').post(loginUser);
router.route('/register').post(registerUser);
router.route('/verifyMail').post(verifyMail);

export default router;