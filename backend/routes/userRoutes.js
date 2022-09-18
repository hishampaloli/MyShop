import express from "express";
const router = express.Router();
import AsyncHandler from "express-async-handler";
import { login, register, getUsers, DeleteUsers, getUsersProfile, UpdateUsersProfile } from "../controllers/userController.js";
import { protect, isAdmin } from "../middlewares/authMiddleware.js";

router.route("/login").post(login);
router.route("/register").post(register);
router.route("/allusers").get(protect, isAdmin, getUsers);
router.route("/profile/:id").get(protect, getUsersProfile);
router.route("/:id").delete(protect, isAdmin, DeleteUsers);
router.route("/edit/:id").put(protect, UpdateUsersProfile);


export default router;
