import { prisma } from "../../lib/prisma";

const getAllAppointments = async () => {
  const appointments = await prisma.appointment.findMany({
    include: {
      property: true,
      buyer: true,
      agent: true,
    },
  });
  return appointments;
};

const getAppointmentById = async (id: string) => {
  const appointment = await prisma.appointment.findUnique({
    where: { id },
    include: {
      property: true,
      buyer: true,
      agent: true,
    },
  });
  return appointment;
};

const getAppointmentsByAgentId = async (
  agentId: string
) => {
  console.log("agent id",agentId);
  const appointments =
    await prisma.appointment.findMany({
      where: {
        agentId,
      },

      include: {
        property: true,
        buyer: true,
        agent: true,
      },

      orderBy: {
        createdAt: "desc",
      },
    });

  return appointments;
};

const createAppointment = async (payload: any) => {
  const appointment = await prisma.appointment.create({
    data: payload,
    include: {
      property: true,
      buyer: true,
      agent: true,
    },
  });
  return appointment;
};

const updateAppointment = async (id: string, payload: any) => {
  const appointment = await prisma.appointment.update({
    where: { id },
    data: payload,
    include: {
      property: true,
      buyer: true,
      agent: true,
    },
  });
  return appointment;
};

const deleteAppointment = async (id: string) => {
  const appointment = await prisma.appointment.delete({
    where: { id },
  });
  return appointment;
};

export const AppointmentService = {
  getAllAppointments,
  getAppointmentById,
  createAppointment,
  updateAppointment,
  deleteAppointment,
  getAppointmentsByAgentId,
};
