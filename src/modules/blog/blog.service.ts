import { prisma } from "../../lib/prisma";

const getAllBlogs = async () => {
  const blogs = await prisma.blog.findMany({
    include: {
      author: true,
    },
  });
  return blogs;
};

const getBlogById = async (id: string) => {
  const blog = await prisma.blog.findUnique({
    where: { id },
    include: {
      author: true,
    },
  });
  return blog;
};

const createBlog = async (payload: any) => {
  const blog = await prisma.blog.create({
    data: payload,
    include: {
      author: true,
    },
  });
  return blog;
};

const updateBlog = async (id: string, payload: any) => {
  const blog = await prisma.blog.update({
    where: { id },
    data: payload,
    include: {
      author: true,
    },
  });
  return blog;
};

const deleteBlog = async (id: string) => {
  const blog = await prisma.blog.delete({
    where: { id },
  });
  return blog;
};

export const BlogService = {
  getAllBlogs,
  getBlogById,
  createBlog,
  updateBlog,
  deleteBlog,
};
