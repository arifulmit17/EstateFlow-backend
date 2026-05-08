import { Router } from "express";
import { InquiryController } from "./inquiry.controller";

const router = Router();

router.get("/", InquiryController.getAllInquiries);
router.get("/:id", InquiryController.getInquiryById);
router.post("/", InquiryController.createInquiry);
router.put("/:id", InquiryController.updateInquiry);
router.delete("/:id", InquiryController.deleteInquiry);

export default router;
