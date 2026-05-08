
import type { Request, Response } from "express";
import { userService } from "./user.service";
import { prisma } from "../../lib/prisma";


// GET ALL
export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const result = await userService.getAllUsers();

    res.status(200).json({
      success: true,
      message: "Users retrieved successfully",
      data: result,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: "Failed to get users",
      error: error.message,
    });
  }
};

// GET BY ID
export const getUserById = async (req: Request<{ id: string }>, res: Response) => {
  try {
    const result = await userService.getUserById(req.params.id);

    res.status(200).json({
      success: true,
      message: "User retrieved successfully",
      data: result,
    });
  } catch (error: any) {
    res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};

// UPDATE
export const updateUser = async (req: Request<{ id: string }>, res: Response) => {
  try {
    const result = await userService.updateUser(
      req.params.id,
      req.body
    );

    res.status(200).json({
      success: true,
      message: "User updated successfully",
      data: result,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: "User update failed",
      error: error.message,
    });
  }
};

// DELETE
export const deleteUser = async (req: Request<{ id: string }>, res: Response) => {
  try {
    const result = await userService.deleteUser(req.params.id);

    res.status(200).json({
      success: true,
      message: "User deleted successfully",
      data: result,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: "User deletion failed",
      error: error.message,
    });
  }
};

export const updateUserStatus = async (req: Request, res: Response) => {
  try {
    const { id } = req.params as { id: string }
    const { isActive } = req.body

    if (!id) {
      return res.status(400).json({
        success: false,
        message: "Invalid user ID",
      })
    }

    // 🔥 ensure boolean
    const parsedIsActive =
      typeof isActive === "boolean"
        ? isActive
        : isActive === "true"

    console.log("parsedIsActive:", parsedIsActive)

    const user = await prisma.user.update({
      where: { id },
      data: { isActive: parsedIsActive },
    })
    console.log("user status",user);

    return res.json({
      success: true,
      data: user,
    })
  } catch (error: any) {
    console.error("Update user status error:", error)

    return res.status(400).json({
      success: false,
      message: error.message,
    })
  }
}