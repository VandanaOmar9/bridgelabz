import express from "express";
import user from "../midd/user.js";
import usersignup from "../service/signup.js";  
import userloggingservice from "../service/user_logging.js";
import userlogging from "../midd/logging.js";

let router = express.Router();

router.post("/signup", user, usersignup);
router.post("/login", userlogging, userloggingservice); 

export default router;
