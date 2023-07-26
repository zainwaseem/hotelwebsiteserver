import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import cookieParser from "cookie-parser";
import userRoutes from "./routes/userRoutes.js";
import feedbackRoutes from "./routes/feedbackroutes.js";
import roomRoutes from "./routes/ProductRoutes.js";
import staffRoutes from "./routes/staffRoutes.js";
import inventoryRoutes from "./routes/inventoryroutes.js";
import * as dotenv from "dotenv";
dotenv.config();
const app = express();
app.use(express.json({ limit: "50mb" }));

import { v2 as cloudinary } from "cloudinary";
cloudinary.config({
  cloud_name: "dlf1jfgzk",
  api_key: "137343997832747",
  api_secret: "f4C1Mhxz1n7ItBmGvPjTF9oXz6M",
});

const corsOptions = {
  origin: ["https://hotelmanagementsite.netlify.app"],
  // origin: "http://localhost:3000",
  credentials: true,
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(cookieParser());
connectDB();

app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "something went wrong!";

  return res.status(status).json({
    success: false,
    status,
    message,
  });
});

app.use("/api", userRoutes);
app.use("/api", feedbackRoutes);
app.use("/api", staffRoutes);
app.use("/api", roomRoutes);
app.use("/api", inventoryRoutes);
app.get("*", (req, res) => {
  res.send(`HMS routes`);
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
