import { Router } from "express";
import { AppointmentController } from "./appointment.controller";

const router = Router();

router.get("/", AppointmentController.getAllAppointments);
router.get("/:id", AppointmentController.getAppointmentById);
router.get("/agent/:agentId", AppointmentController.getAppointmentsByAgentId);
router.post("/", AppointmentController.createAppointment);
router.put("/:id", AppointmentController.updateAppointment);
router.delete("/:id", AppointmentController.deleteAppointment);

export default router;
