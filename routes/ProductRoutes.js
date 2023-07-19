import express from "express";
const router = express.Router();
import {
  AddProduct,
  getProduct,
  getALLProducts,
  deleteProduct,
  updateProduct,
} from "../controllers/ProductControllers.js";

router.get("/rooms", getALLProducts);
router.get("/rooms/:id", getProduct);
router.post("/rooms", AddProduct);
router.patch("/rooms/:id", updateProduct);
router.delete("/rooms/:id", deleteProduct);

export default router;
