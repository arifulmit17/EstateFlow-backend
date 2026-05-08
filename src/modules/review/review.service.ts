import { prisma } from "../../lib/prisma";

const getAllReviews = async () => {
  const reviews = await prisma.review.findMany({
    include: {
      user: true,
      property: true,
    },
  });
  return reviews;
};

const getReviewById = async (id: string) => {
  const review = await prisma.review.findUnique({
    where: { id },
    include: {
      user: true,
      property: true,
    },
  });
  return review;
};

const createReview = async (payload: any) => {
  const review = await prisma.review.create({
    data: payload,
    include: {
      user: true,
      property: true,
    },
  });
  return review;
};

const updateReview = async (id: string, payload: any) => {
  const review = await prisma.review.update({
    where: { id },
    data: payload,
    include: {
      user: true,
      property: true,
    },
  });
  return review;
};

const deleteReview = async (id: string) => {
  const review = await prisma.review.delete({
    where: { id },
  });
  return review;
};

export const ReviewService = {
  getAllReviews,
  getReviewById,
  createReview,
  updateReview,
  deleteReview,
};
