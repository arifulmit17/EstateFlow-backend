import type { Request, Response } from "express";
import { AppointmentService } from "./appointment.service";

const getAllAppointments = async (req: Request, res: Response) => {
  try {
    const appointments = await AppointmentService.getAllAppointments();
    res.status(200).json({
      success: true,
      data: appointments,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getAppointmentById = async (req: Request<{ id: string }>, res: Response) => {
  try {
    const { id } = req.params;
    const appointment = await AppointmentService.getAppointmentById(id);
    res.status(200).json({
      success: true,
      data: appointment,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


const getAppointmentsByAgentId = async (
  req: Request<{ agentId: string }>,
  res: Response
) => {
  try {
    const { agentId } = req.params;

    const appointments =
      await AppointmentService.getAppointmentsByAgentId(
        agentId
      );

    res.status(200).json({
      success: true,
      data: appointments,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const createAppointment = async (req: Request, res: Response) => {
  try {
    const appointment = await AppointmentService.createAppointment(req.body);
    res.status(201).json({
      success: true,
      data: appointment,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const updateAppointment = async (req: Request<{ id: string }>, res: Response) => {
  try {
    const { id } = req.params;
    const appointment = await AppointmentService.updateAppointment(id, req.body);
    res.status(200).json({
      success: true,
      data: appointment,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const deleteAppointment = async (req: Request<{ id: string }>, res: Response) => {
  try {
    const { id } = req.params;
    const appointment = await AppointmentService.deleteAppointment(id);
    res.status(200).json({
      success: true,
      data: appointment,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const AppointmentController = {
  getAllAppointments,
  getAppointmentById,
  createAppointment,
  updateAppointment,
  deleteAppointment,
  getAppointmentsByAgentId,
};
