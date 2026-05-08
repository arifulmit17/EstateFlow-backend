import type { Request, Response } from "express";
import { PropertyService } from "./property.service";

const getAllProperties = async (req: Request, res: Response) => {
  try {
    const properties = await PropertyService.getAllProperties();
    res.status(200).json({
      success: true,
      data: properties,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getPropertyById = async (req: Request<{ id: string }>, res: Response) => {
  try {
    const { id } = req.params;
    const property = await PropertyService.getPropertyById(id);
    res.status(200).json({
      success: true,
      data: property,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const createProperty = async (req: Request, res: Response) => {
  try {
    const property = await PropertyService.createProperty(req.body);
    res.status(201).json({
      success: true,
      data: property,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const updateProperty = async (req: Request<{ id: string }>, res: Response) => {
  try {
    const { id } = req.params;
    const property = await PropertyService.updateProperty(id, req.body);
    res.status(200).json({
      success: true,
      data: property,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const deleteProperty = async (req: Request<{ id: string }>, res: Response) => {
  try {
    const { id } = req.params;
    const property = await PropertyService.deleteProperty(id);
    res.status(200).json({
      success: true,
      data: property,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const PropertyController = {
  getAllProperties,
  getPropertyById,
  createProperty,
  updateProperty,
  deleteProperty,
};
