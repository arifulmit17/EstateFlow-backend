import type { Request, Response } from "express";
import { BlogService } from "./blog.service";

const getAllBlogs = async (req: Request, res: Response) => {
  try {
    const blogs = await BlogService.getAllBlogs();
    res.status(200).json({
      success: true,
      data: blogs,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getBlogById = async (req: Request<{ id: string }>, res: Response) => {
  try {
    const { id } = req.params;
    const blog = await BlogService.getBlogById(id);
    res.status(200).json({
      success: true,
      data: blog,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const createBlog = async (req: Request, res: Response) => {
  try {
    const blog = await BlogService.createBlog(req.body);
    res.status(201).json({
      success: true,
      data: blog,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const updateBlog = async (req: Request<{ id: string }>, res: Response) => {
  try {
    const { id } = req.params;
    const blog = await BlogService.updateBlog(id, req.body);
    res.status(200).json({
      success: true,
      data: blog,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const deleteBlog = async (req: Request<{ id: string }>, res: Response) => {
  try {
    const { id } = req.params;
    const blog = await BlogService.deleteBlog(id);
    res.status(200).json({
      success: true,
      data: blog,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const BlogController = {
  getAllBlogs,
  getBlogById,
  createBlog,
  updateBlog,
  deleteBlog,
};
