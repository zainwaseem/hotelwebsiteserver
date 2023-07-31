import express from "express";
const router = express.Router();
import {
  register,
  login,
  getALLUsers,
  logout,
  loggedIn,
  getUser,
  updateUser,
  deleteUser,
} from "../controllers/userControllers.js";
import { isAuthenticated, isAuthorized } from "../middleware/auth.js";

router.post("/register", register);
router.post("/login", login);
router.get(
  "/users",
  getALLUsers
);
router.get(
  "/users/:id",
  getUser
);
router.delete(
  "/users/:id",
  deleteUser
);
router.get("/loggedin", loggedIn);
router.get("/logout", logout);
router.put("/users/:id", updateUser);

export default router;
