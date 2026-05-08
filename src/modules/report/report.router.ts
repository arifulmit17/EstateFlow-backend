import { Router } from "express";
import { ReportController } from "./report.controller";

const router = Router();

router.get("/", ReportController.getAllReports);
router.get("/:id", ReportController.getReportById);
router.post("/", ReportController.createReport);
router.put("/:id", ReportController.updateReport);
router.delete("/:id", ReportController.deleteReport);

export default router;
