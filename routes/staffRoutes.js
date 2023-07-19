import express from "express";
const router = express.Router();
import {
  AddStaff,
  getAllStaff,
  deleteStaff,
} from "../controllers/staffControllers.js";

router.post("/staff", AddStaff);
router.get("/staff", getAllStaff);
router.delete("/staff/:id", deleteStaff);

export default router;
