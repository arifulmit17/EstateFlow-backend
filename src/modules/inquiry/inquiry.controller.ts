import type { Request, Response } from "express";
import { InquiryService } from "./inquiry.service";

const getAllInquiries = async (req: Request, res: Response) => {
  try {
    const inquiries = await InquiryService.getAllInquiries();
    res.status(200).json({
      success: true,
      data: inquiries,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getInquiryById = async (req: Request<{ id: string }>, res: Response) => {
  try {
    const { id } = req.params;
    const inquiry = await InquiryService.getInquiryById(id);
    res.status(200).json({
      success: true,
      data: inquiry,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const createInquiry = async (req: Request, res: Response) => {
  try {
    const inquiry = await InquiryService.createInquiry(req.body);
    res.status(201).json({
      success: true,
      data: inquiry,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const updateInquiry = async (req: Request<{ id: string }>, res: Response) => {
  try {
    const { id } = req.params;
    const inquiry = await InquiryService.updateInquiry(id, req.body);
    res.status(200).json({
      success: true,
      data: inquiry,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const deleteInquiry = async (req: Request<{ id: string }>, res: Response) => {
  try {
    const { id } = req.params;
    const inquiry = await InquiryService.deleteInquiry(id);
    res.status(200).json({
      success: true,
      data: inquiry,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const InquiryController = {
  getAllInquiries,
  getInquiryById,
  createInquiry,
  updateInquiry,
  deleteInquiry,
};
