import { prisma } from "../../lib/prisma";

const getAllInquiries = async () => {
  const inquiries = await prisma.inquiry.findMany({
    include: {
      property: true,
    },
  });
  return inquiries;
};

const getInquiryById = async (id: string) => {
  const inquiry = await prisma.inquiry.findUnique({
    where: { id },
    include: {
      property: true,
    },
  });
  return inquiry;
};

const createInquiry = async (payload: any) => {
  const inquiry = await prisma.inquiry.create({
    data: payload,
    include: {
      property: true,
    },
  });
  return inquiry;
};

const updateInquiry = async (id: string, payload: any) => {
  const inquiry = await prisma.inquiry.update({
    where: { id },
    data: payload,
    include: {
      property: true,
    },
  });
  return inquiry;
};

const deleteInquiry = async (id: string) => {
  const inquiry = await prisma.inquiry.delete({
    where: { id },
  });
  return inquiry;
};

export const InquiryService = {
  getAllInquiries,
  getInquiryById,
  createInquiry,
  updateInquiry,
  deleteInquiry,
};
