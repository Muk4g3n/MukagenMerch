import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import {
  addProduct,
  deleteProduct,
  getproducts,
} from "../controllers/productController.js";

const router = express.Router();

router.post("/add", protect, addProduct);
router.delete("/delete", protect, deleteProduct);
router.get("/getproducts", protect, getproducts);

export default router;
