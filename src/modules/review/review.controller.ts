import type { Request, Response } from "express";
import { ReviewService } from "./review.service";

const getAllReviews = async (req: Request, res: Response) => {
  try {
    const reviews = await ReviewService.getAllReviews();
    res.status(200).json({
      success: true,
      data: reviews,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getReviewById = async (req: Request<{ id: string }>, res: Response) => {
  try {
    const { id } = req.params;
    const review = await ReviewService.getReviewById(id);
    res.status(200).json({
      success: true,
      data: review,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const createReview = async (req: Request, res: Response) => {
  try {
    const review = await ReviewService.createReview(req.body);
    res.status(201).json({
      success: true,
      data: review,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const updateReview = async (req: Request<{ id: string }>, res: Response) => {
  try {
    const { id } = req.params;
    const review = await ReviewService.updateReview(id, req.body);
    res.status(200).json({
      success: true,
      data: review,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const deleteReview = async (req: Request<{ id: string }>, res: Response) => {
  try {
    const { id } = req.params;
    const review = await ReviewService.deleteReview(id);
    res.status(200).json({
      success: true,
      data: review,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const ReviewController = {
  getAllReviews,
  getReviewById,
  createReview,
  updateReview,
  deleteReview,
};
