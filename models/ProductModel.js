import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    roomType: { type: String },
    availability: { type: String },
    price: { type: String },
    occupancyStatus: { type: String },
    checkInDate: { type: String },
    checkOutDate: { type: String },
    img: {
      public_id: { type: String },
      secure_url: { type: String },
    },
  },
  { timestamps: true }
);

export default mongoose.model("Room", productSchema);
