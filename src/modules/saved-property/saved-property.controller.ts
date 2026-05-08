import type { Request, Response } from "express";
import { SavedPropertyService } from "./saved-property.service";

const getAllSavedProperties = async (req: Request, res: Response) => {
  try {
    const savedProperties = await SavedPropertyService.getAllSavedProperties();
    res.status(200).json({
      success: true,
      data: savedProperties,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getSavedPropertyById = async (req: Request<{ id: string }>, res: Response) => {
  try {
    const { id } = req.params;
    const savedProperty = await SavedPropertyService.getSavedPropertyById(id);
    res.status(200).json({
      success: true,
      data: savedProperty,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const createSavedProperty = async (req: Request, res: Response) => {
  try {
    const savedProperty = await SavedPropertyService.createSavedProperty(req.body);
    res.status(201).json({
      success: true,
      data: savedProperty,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const deleteSavedProperty = async (req: Request<{ id: string }>, res: Response) => {
  try {
    const { id } = req.params;
    const savedProperty = await SavedPropertyService.deleteSavedProperty(id);
    res.status(200).json({
      success: true,
      data: savedProperty,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const SavedPropertyController = {
  getAllSavedProperties,
  getSavedPropertyById,
  createSavedProperty,
  deleteSavedProperty,
};
