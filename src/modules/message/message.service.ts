import { prisma } from "../../lib/prisma";

const getAllMessages = async () => {
  const messages = await prisma.message.findMany({
    include: {
      sender: true,
      receiver: true,
    },
  });
  return messages;
};

const getMessageById = async (id: string) => {
  const message = await prisma.message.findUnique({
    where: { id },
    include: {
      sender: true,
      receiver: true,
    },
  });
  return message;
};

const createMessage = async (payload: any) => {
  const message = await prisma.message.create({
    data: payload,
    include: {
      sender: true,
      receiver: true,
    },
  });
  return message;
};

const updateMessage = async (id: string, payload: any) => {
  const message = await prisma.message.update({
    where: { id },
    data: payload,
    include: {
      sender: true,
      receiver: true,
    },
  });
  return message;
};

const deleteMessage = async (id: string) => {
  const message = await prisma.message.delete({
    where: { id },
  });
  return message;
};

export const MessageService = {
  getAllMessages,
  getMessageById,
  createMessage,
  updateMessage,
  deleteMessage,
};
