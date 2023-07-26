import express from "express";
const router = express.Router();

import {
  getALLInventroies,
  placeInevtory,
  deleteInventory,
  updateInventory,
  getInventory,
} from "../controllers/inventorycontrollers.js";
router.post("/inventory", placeInevtory);
router.get("/inventory", getALLInventroies);
router.delete("/inventory/:id", deleteInventory);
router.put("/inventory/:id", updateInventory);
router.get("/inventory/:id", getInventory);

export default router;
