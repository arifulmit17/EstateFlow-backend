import { prisma } from "../../lib/prisma";

const getAllNotifications = async () => {
  const notifications = await prisma.notification.findMany({
    include: {
      user: true,
    },
  });
  return notifications;
};

const getNotificationById = async (id: string) => {
  const notification = await prisma.notification.findUnique({
    where: { id },
    include: {
      user: true,
    },
  });
  return notification;
};

const createNotification = async (payload: any) => {
  const notification = await prisma.notification.create({
    data: payload,
    include: {
      user: true,
    },
  });
  return notification;
};

const updateNotification = async (id: string, payload: any) => {
  const notification = await prisma.notification.update({
    where: { id },
    data: payload,
    include: {
      user: true,
    },
  });
  return notification;
};

const deleteNotification = async (id: string) => {
  const notification = await prisma.notification.delete({
    where: { id },
  });
  return notification;
};

export const NotificationService = {
  getAllNotifications,
  getNotificationById,
  createNotification,
  updateNotification,
  deleteNotification,
};
