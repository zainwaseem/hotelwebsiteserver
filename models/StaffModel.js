import mongoose from "mongoose";

const staffSchema = new mongoose.Schema(
  {
    name: { type: String },
    role: { type: String },
    workschedule: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model("Staff", staffSchema);
