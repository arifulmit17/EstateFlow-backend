
import bcrypt from "bcryptjs";
import { prisma } from "../../lib/prisma";



// GET ALL USERS
const getAllUsers = async () => {
  const users = await prisma.user.findMany({
    select: {
      id: true,
      name: true,
      email: true,
      avatar: true,
      phone: true,
      bio: true,
      role: true,
      isActive: true,
      isVerified: true,
      provider: true,
      lastLoginAt: true,
      createdAt: true,
      updatedAt: true,
    },
  });

  return users;
};

// GET USER BY ID
const getUserById = async (id: string) => {
  const user = await prisma.user.findUnique({
    where: { id },
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
      isActive: true,
      createdAt: true,
    },
  });

  if (!user) {
    throw new Error("User not found");
  }

  return user;
};

// UPDATE USER
const updateUser = async (id: string, payload: any) => {
  if (payload.password) {
    payload.password = await bcrypt.hash(payload.password, 10);
  }

  const user = await prisma.user.update({
    where: { id },
    data: payload,
  });

  return user;
};

// DELETE USER (hard delete)
const deleteUser = async (id: string) => {
  const user = await prisma.user.delete({
    where: { id },
  });

  return user;
};

export const userService = {
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
};