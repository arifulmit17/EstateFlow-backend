import type { Request, Response } from "express";
import { MessageService } from "./message.service";

const getAllMessages = async (req: Request, res: Response) => {
  try {
    const messages = await MessageService.getAllMessages();
    res.status(200).json({
      success: true,
      data: messages,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getMessageById = async (req: Request<{ id: string }>, res: Response) => {
  try {
    const { id } = req.params;
    const message = await MessageService.getMessageById(id);
    res.status(200).json({
      success: true,
      data: message,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const createMessage = async (req: Request, res: Response) => {
  try {
    const message = await MessageService.createMessage(req.body);
    res.status(201).json({
      success: true,
      data: message,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const updateMessage = async (req: Request<{ id: string }>, res: Response) => {
  try {
    const { id } = req.params;
    const message = await MessageService.updateMessage(id, req.body);
    res.status(200).json({
      success: true,
      data: message,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const deleteMessage = async (req: Request<{ id: string }>, res: Response) => {
  try {
    const { id } = req.params;
    const message = await MessageService.deleteMessage(id);
    res.status(200).json({
      success: true,
      data: message,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const MessageController = {
  getAllMessages,
  getMessageById,
  createMessage,
  updateMessage,
  deleteMessage,
};
