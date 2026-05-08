import type { Request, Response } from "express";
import { NotificationService } from "./notification.service";

const getAllNotifications = async (req: Request, res: Response) => {
  try {
    const notifications = await NotificationService.getAllNotifications();
    res.status(200).json({
      success: true,
      data: notifications,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getNotificationById = async (req: Request<{ id: string }>, res: Response) => {
  try {
    const { id } = req.params;
    const notification = await NotificationService.getNotificationById(id);
    res.status(200).json({
      success: true,
      data: notification,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const createNotification = async (req: Request, res: Response) => {
  try {
    const notification = await NotificationService.createNotification(req.body);
    res.status(201).json({
      success: true,
      data: notification,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const updateNotification = async (req: Request<{ id: string }>, res: Response) => {
  try {
    const { id } = req.params;
    const notification = await NotificationService.updateNotification(id, req.body);
    res.status(200).json({
      success: true,
      data: notification,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const deleteNotification = async (req: Request<{ id: string }>, res: Response) => {
  try {
    const { id } = req.params;
    const notification = await NotificationService.deleteNotification(id);
    res.status(200).json({
      success: true,
      data: notification,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const NotificationController = {
  getAllNotifications,
  getNotificationById,
  createNotification,
  updateNotification,
  deleteNotification,
};
