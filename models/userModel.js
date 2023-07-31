import mongoose from "mongoose";

const usersSchema = new mongoose.Schema(
  {
    username: { type: String, unique: true },
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
  },
  { timestamps: true }
);

export default mongoose.model("User", usersSchema);
