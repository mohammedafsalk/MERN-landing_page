import express from "express";
import { checkAuth, userLogin, userLogout, userSignup } from "../controller/auth.controller.js";
import { check } from "../middleware/authCheck.middleware.js";
const router = express.Router();

router.post("/signup", userSignup);
router.post("/login", userLogin);
router.get("/logout", userLogout);

router.get("/check",check,checkAuth)

export default router;
