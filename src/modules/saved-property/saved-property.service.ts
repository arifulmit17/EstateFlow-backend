import { prisma } from "../../lib/prisma";

const getAllSavedProperties = async () => {
  const savedProperties = await prisma.savedProperty.findMany({
    include: {
      user: true,
      property: true,
    },
  });
  return savedProperties;
};

const getSavedPropertyById = async (id: string) => {
  const savedProperty = await prisma.savedProperty.findUnique({
    where: { id },
    include: {
      user: true,
      property: true,
    },
  });
  return savedProperty;
};

const createSavedProperty = async (payload: any) => {
  const savedProperty = await prisma.savedProperty.create({
    data: payload,
    include: {
      user: true,
      property: true,
    },
  });
  return savedProperty;
};

const deleteSavedProperty = async (id: string) => {
  const savedProperty = await prisma.savedProperty.delete({
    where: { id },
  });
  return savedProperty;
};

export const SavedPropertyService = {
  getAllSavedProperties,
  getSavedPropertyById,
  createSavedProperty,
  deleteSavedProperty,
};
