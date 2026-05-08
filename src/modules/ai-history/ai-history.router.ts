import { Router } from "express";
import { AIHistoryController } from "./ai-history.controller";

const router = Router();

router.get("/", AIHistoryController.getAllAIHistories);
router.get("/:id", AIHistoryController.getAIHistoryById);
router.post("/", AIHistoryController.createAIHistory);
router.put("/:id", AIHistoryController.updateAIHistory);
router.delete("/:id", AIHistoryController.deleteAIHistory);

export default router;
