import express from "express";
import { isAdmin, requireSignIn } from "../middleware/authMiddleware.js";
import { categoryController, createCategoryController, deleteCategoryController, singleCategoryController, updateCategoryController } from "../controllers/categoryController.js";

const router = express.Router();

// Routes
// create category 
router.post(
  "/create-category",
  requireSignIn,
  isAdmin,
  createCategoryController
);

// update category
router.put(
    "/update-category/:id",
    requireSignIn,
    isAdmin,
updateCategoryController
  );


//   get All Category
router.get('/get-category', categoryController);

//   get sindle Category
router.get('/single-category/:slug', singleCategoryController);

// Delete Category route
router.delete('/delete-category/:id',requireSignIn,isAdmin, deleteCategoryController)

export default router;
