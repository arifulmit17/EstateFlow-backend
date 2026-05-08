import type { Request, Response } from "express";
import { AIHistoryService } from "./ai-history.service";

const getAllAIHistories = async (req: Request, res: Response) => {
  try {
    const aiHistories = await AIHistoryService.getAllAIHistories();
    res.status(200).json({
      success: true,
      data: aiHistories,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getAIHistoryById = async (req: Request<{ id: string }>, res: Response) => {
  try {
    const { id } = req.params;
    const aiHistory = await AIHistoryService.getAIHistoryById(id);
    res.status(200).json({
      success: true,
      data: aiHistory,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const createAIHistory = async (req: Request, res: Response) => {
  try {
    const aiHistory = await AIHistoryService.createAIHistory(req.body);
    res.status(201).json({
      success: true,
      data: aiHistory,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const updateAIHistory = async (req: Request<{ id: string }>, res: Response) => {
  try {
    const { id } = req.params;
    const aiHistory = await AIHistoryService.updateAIHistory(id, req.body);
    res.status(200).json({
      success: true,
      data: aiHistory,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const deleteAIHistory = async (req: Request<{ id: string }>, res: Response) => {
  try {
    const { id } = req.params;
    const aiHistory = await AIHistoryService.deleteAIHistory(id);
    res.status(200).json({
      success: true,
      data: aiHistory,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const AIHistoryController = {
  getAllAIHistories,
  getAIHistoryById,
  createAIHistory,
  updateAIHistory,
  deleteAIHistory,
};
