import { prisma } from "../../lib/prisma";

const getAllReports = async () => {
  const reports = await prisma.report.findMany({
    include: {
      reporter: true,
      property: true,
    },
  });
  return reports;
};

const getReportById = async (id: string) => {
  const report = await prisma.report.findUnique({
    where: { id },
    include: {
      reporter: true,
      property: true,
    },
  });
  return report;
};

const createReport = async (payload: any) => {
  const report = await prisma.report.create({
    data: payload,
    include: {
      reporter: true,
      property: true,
    },
  });
  return report;
};

const updateReport = async (id: string, payload: any) => {
  const report = await prisma.report.update({
    where: { id },
    data: payload,
    include: {
      reporter: true,
      property: true,
    },
  });
  return report;
};

const deleteReport = async (id: string) => {
  const report = await prisma.report.delete({
    where: { id },
  });
  return report;
};

export const ReportService = {
  getAllReports,
  getReportById,
  createReport,
  updateReport,
  deleteReport,
};
