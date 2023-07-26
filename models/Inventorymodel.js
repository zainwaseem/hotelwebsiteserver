import mongoose from "mongoose";
const InventorySchema = new mongoose.Schema(
  {
    toiletries: {
      type: String,
      required: true,
    },
    linens: {
      type: String,
      required: true,
    },
    equipment: {
      type: String,
      required: true,
    },
    inventorylevels: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Inventory", InventorySchema);
