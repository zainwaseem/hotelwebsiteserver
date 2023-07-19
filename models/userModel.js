import mongoose from "mongoose";
// import bcrypt from "bcrypt";
// import jwt from "jsonwebtoken";

const usersSchema = new mongoose.Schema(
  {
    // name: String,
    username: String,
    email: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
      minlength: [8, "8 characters must"],
    },
    role: {
      type: String,
      default: "guest",
    },
    active: {
      type: String,
      default: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", usersSchema);
