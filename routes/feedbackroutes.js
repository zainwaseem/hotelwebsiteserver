import express from "express";
const router = express.Router();
import {
  Savefeedback,
  getAllfeedback,
  deletefeedback,
} from "../controllers/feedbackcontrollers.js";

router.post("/feedback", Savefeedback);
router.get("/feedback", getAllfeedback);
router.delete("/feedback/:id", deletefeedback);

export default router;
