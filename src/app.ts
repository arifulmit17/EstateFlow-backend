import express, { type Request, type Response } from "express"
import cors from "cors"
import { authRoutes } from "./modules/auth/auth.router";
import { userRoutes } from "./modules/user/user.router";
import { authMiddleware } from './middlewares/authMiddleware';
import cookieParser from "cookie-parser"
import { paymentRoutes } from "./modules/payment/payment.router";
import { handleWebhook, stripeWebhook } from "./modules/payment/stripe.webhook";
import blogRoutes from "./modules/blog/blog.router";
import aiHistoryRoutes from "./modules/ai-history/ai-history.router";
import appointmentRoutes from "./modules/appointment/appointment.router";
import inquiryRoutes from "./modules/inquiry/inquiry.router";
import messageRoutes from "./modules/message/message.router";
import notificationRoutes from "./modules/notification/notification.router";
import propertyRoutes from "./modules/property/property.router";
import reportRoutes from "./modules/report/report.router";
import reviewRoutes from "./modules/review/review.router";
import savedPropertyRoutes from "./modules/saved-property/saved-property.router";


const app=express();
app.use(cookieParser())
app.post(
  "/api/webhook",
  stripeWebhook,
  handleWebhook
)
app.use(express.json())
app.use(
  cors({
    origin: "http://localhost:4000",
    // origin: "https://estate-flow-online.vercel.app",
    credentials: true,
  })
)
app.use((req, res, next) => {
  // console.log("Raw Cookie Header:", req.headers.cookie)
  next()
})




app.post("/webhook",(req:Request,res:Response)=>{
  console.log("Received webhook:", req.body)
  res.status(200).send("Webhook received")
})


app.get("/",(req:Request,res:Response)=>{
    res.send("Server is running")

})


app.use("/api/auth",authRoutes)
app.use("/api/users",authMiddleware,userRoutes)
app.use("/api/blog", blogRoutes)
app.use("/api/ai-history", aiHistoryRoutes)
app.use("/api/appointment", appointmentRoutes)
app.use("/api/inquiry", inquiryRoutes)
app.use("/api/message", messageRoutes)
app.use("/api/notification", notificationRoutes)
app.use("/api/property", propertyRoutes)
app.use("/api/report", reportRoutes)
app.use("/api/review", reviewRoutes)
app.use("/api/saved-property", savedPropertyRoutes)
app.use("/api/payment", paymentRoutes);
export default app;