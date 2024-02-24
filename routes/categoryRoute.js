import express from "express";
import { isAdmin, requireSignIn } from "../middleware/authMiddleware.js";
import { createCategoryController } from "../controllers/categoryController.js";

const router = express.Router();

// Routes

router.post(
  "/create-category",
  requireSignIn,
  isAdmin,
  createCategoryController
);

export default router;
