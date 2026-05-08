import type { Request, Response } from "express";
import { ReportService } from "./report.service";

const getAllReports = async (req: Request, res: Response) => {
  try {
    const reports = await ReportService.getAllReports();
    res.status(200).json({
      success: true,
      data: reports,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getReportById = async (req: Request<{ id: string }>, res: Response) => {
  try {
    const { id } = req.params;
    const report = await ReportService.getReportById(id);
    res.status(200).json({
      success: true,
      data: report,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const createReport = async (req: Request, res: Response) => {
  try {
    const report = await ReportService.createReport(req.body);
    res.status(201).json({
      success: true,
      data: report,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const updateReport = async (req: Request<{ id: string }>, res: Response) => {
  try {
    const { id } = req.params;
    const report = await ReportService.updateReport(id, req.body);
    res.status(200).json({
      success: true,
      data: report,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const deleteReport = async (req: Request<{ id: string }>, res: Response) => {
  try {
    const { id } = req.params;
    const report = await ReportService.deleteReport(id);
    res.status(200).json({
      success: true,
      data: report,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const ReportController = {
  getAllReports,
  getReportById,
  createReport,
  updateReport,
  deleteReport,
};
