import express from "express";
import { loginUser } from "../controllers/authController.js";

const router = express.Router();

// router.route("/create-user").post(createUser);
router.route("/login").post(loginUser);

export default router;
