import { Router } from "express";
import { SavedPropertyController } from "./saved-property.controller";

const router = Router();

router.get("/", SavedPropertyController.getAllSavedProperties);
router.get("/:id", SavedPropertyController.getSavedPropertyById);
router.post("/", SavedPropertyController.createSavedProperty);
router.delete("/:id", SavedPropertyController.deleteSavedProperty);

export default router;
