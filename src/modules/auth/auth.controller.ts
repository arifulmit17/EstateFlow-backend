
import type { Request, Response } from "express";
import { AuthService } from "./auth.service";


const registerUser = async (req: Request, res: Response) => {
  try {
    const result = await AuthService.createUserAuth(req.body);

    // remove password from response
    

    res.status(201).json({
      success: true,
      message: "User registered successfully",
      token: result.token,
      data: result.user,
      
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: "User registration failed",
      error: error.message,
    });
  }
};

const loginUser = async (req: Request, res: Response) => {
  try {
    const result = await AuthService.loginUserAuth(req.body);

    const { password, ...userWithoutPassword } = result.user;
    
    res.cookie("token", result.token, {
  httpOnly: true,
  sameSite: "none",   // 🔥 change this
  secure: true,
  maxAge: 7 * 24 * 60 * 60 * 1000
})
    res.status(200).json({
      success: true,
      message: "Login successful",
      token: result.token,
      data: userWithoutPassword,
    });
  } catch (error: any) {
    res.status(401).json({
      success: false,
      message: error.message,
    });
  }
};

export const getMe = async (req: any, res: any) => {
  try {
    const user = req.user; // from middleware

    res.status(200).json({
      success: true,
      data: user,
    });
  } catch (error: any) {
    res.status(401).json({
      success: false,
      message: "Unauthorized",
    });
  }
};

export const AuthController = {
  registerUser,
  loginUser,
  getMe,
};