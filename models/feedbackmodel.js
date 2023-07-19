import mongoose from "mongoose";

const feedbackSchema = new mongoose.Schema(
  {
    rating: { type: String },
    description: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model("Feedback", feedbackSchema);
