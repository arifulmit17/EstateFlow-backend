import { prisma } from "../../lib/prisma";

const buildSlug = (value: string) =>
  value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

const getAllProperties = async () => {
  const properties = await prisma.property.findMany({
    include: {
      agent: true,
      images: true,
      amenities: true,
      reviews: true,
    },
  });
  return properties;
};

const getPropertyById = async (id: string) => {
  const property = await prisma.property.findUnique({
    where: { id },
    include: {
      agent: true,
      images: true,
      amenities: true,
      reviews: true,
      appointments: true,
    },
  });
  return property;
};

const getPropertyBySlug = async (slug: string) => {
  const property = await prisma.property.findUnique({
    where: { slug },
    include: {
      agent: true,
      images: true,
      amenities: true,
      reviews: true,
      appointments: true,
    },
  });

  return property;
};



const createProperty = async (payload: any) => {
  const requiredFields = [
    "title",
    "description",
    "price",
    "area",
    "bedrooms",
    "bathrooms",
    "propertyType",
    "listingType",
    "address",
    "city",
    "country",
    "zipCode",
    "agentId",
  ];

  const missingFields = requiredFields.filter((field) => {
    const value = payload?.[field];
    return value === undefined || value === null || value === "";
  });

  if (missingFields.length > 0) {
    throw new Error(
      `Missing required property fields: ${missingFields.join(", ")}`
    );
  }

  const fallbackTitle = typeof payload?.title === "string" ? payload.title : "property";
  const slugBase = buildSlug(payload?.slug || fallbackTitle) || "property";
  const slug = payload?.slug || `${slugBase}-${Date.now()}`;

  const property = await prisma.property.create({
    data: {
      ...payload,
      slug,
    },
    include: {
      agent: true,
      images: true,
    },
  });
  return property;
};

const updateProperty = async (id: string, payload: any) => {
  const property = await prisma.property.update({
    where: { id },
    data: payload,
    include: {
      agent: true,
      images: true,
    },
  });
  return property;
};

const deleteProperty = async (id: string) => {
  const property = await prisma.property.delete({
    where: { id },
  });
  return property;
};

export const PropertyService = {
  getAllProperties,
  getPropertyById,
  getPropertyBySlug,
  createProperty,
  updateProperty,
  deleteProperty,
};
