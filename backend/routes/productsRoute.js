import express from "express";
const router = express.Router();
import AsyncHandler from "express-async-handler";
import {
  getProducts,
  getProductDetails,
  addProduct,
  deleteProduct,
  editProduct,
} from "../controllers/productControllers.js";
import { protect, isAdmin } from "../middlewares/authMiddleware.js";

router.route("/").get(getProducts);
router.route("/:id").get(getProductDetails);
router.route("/new").post(protect, isAdmin, addProduct);
router.route("/:id").delete(protect, isAdmin, deleteProduct);
router.route("/:id").put(protect, isAdmin, editProduct);

export default router;
