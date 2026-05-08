import { prisma } from "../../lib/prisma";

const getAllAIHistories = async () => {
  const aiHistories = await prisma.aIHistory.findMany({
    include: {
      user: true,
    },
  });
  return aiHistories;
};

const getAIHistoryById = async (id: string) => {
  const aiHistory = await prisma.aIHistory.findUnique({
    where: { id },
    include: {
      user: true,
    },
  });
  return aiHistory;
};

const createAIHistory = async (payload: any) => {
  const aiHistory = await prisma.aIHistory.create({
    data: payload,
    include: {
      user: true,
    },
  });
  return aiHistory;
};

const updateAIHistory = async (id: string, payload: any) => {
  const aiHistory = await prisma.aIHistory.update({
    where: { id },
    data: payload,
    include: {
      user: true,
    },
  });
  return aiHistory;
};

const deleteAIHistory = async (id: string) => {
  const aiHistory = await prisma.aIHistory.delete({
    where: { id },
  });
  return aiHistory;
};

export const AIHistoryService = {
  getAllAIHistories,
  getAIHistoryById,
  createAIHistory,
  updateAIHistory,
  deleteAIHistory,
};
