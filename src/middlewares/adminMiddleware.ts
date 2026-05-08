import type { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";


export const adminMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log("Cookies:", req.cookies)
    const token =await req.cookies?.token
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as any;
          
        req.user = decoded;
  console.log("user:", req.user);
  if (req.user?.role !== "ADMIN") {
    return res.status(403).json({
      success: false,
      message: "Forbidden: Admin only",
    });
  }

  next();
};