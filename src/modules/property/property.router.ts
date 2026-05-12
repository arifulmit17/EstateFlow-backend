import { Router } from "express";
import { PropertyController } from "./property.controller";

const router = Router();

router.get("/", PropertyController.getAllProperties);
router.get("/:id", PropertyController.getPropertyById);
router.get("/slug/:slug", PropertyController.getPropertyBySlug);
router.get("/agent/:agentId",PropertyController.getPropertiesByAgentId);
router.post("/", PropertyController.createProperty);
router.patch("/:id", PropertyController.updateProperty);
router.delete("/:id", PropertyController.deleteProperty);

export default router;
