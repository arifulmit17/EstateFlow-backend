import { authMiddleware } from "../../middlewares/authMiddleware";
import { createPaymentIntent } from "./payment.controller";
import express from "express";


const router = express.Router();
router.post("/create-payment-intent",authMiddleware, createPaymentIntent)

export const paymentRoutes = router;