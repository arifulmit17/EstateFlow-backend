import express from "express";
import { AuthController } from "./auth.controller";
import { authMiddleware } from "../../middlewares/authMiddleware";

const router = express.Router();

// REGISTER
router.post("/register", AuthController.registerUser);

// LOGIN
router.post("/login", AuthController.loginUser);

router.get("/me", authMiddleware, AuthController.getMe);

export const authRoutes = router;