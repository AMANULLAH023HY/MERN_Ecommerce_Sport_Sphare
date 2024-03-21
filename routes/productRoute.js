import express from "express";
import { isAdmin, requireSignIn } from "../middleware/authMiddleware.js";
import {
  createProductController,
  deleteProductController,
  getProductContoller,
  getSingleProductContoller,
  productCategoryController,
  productCountController,
  productFiltersController,
  productListPageController,
  productPhotoController,
  reletedProductController,
  searchProductController,
  updateProductController,
} from "../controllers/productController.js";
import ExpressFormidable from "express-formidable";

const router = express.Router();

// routes
// create product Route
router.post(
  "/create-product",
  requireSignIn,
  isAdmin,
  ExpressFormidable(),
  createProductController
);


// update product Route
router.put(
    "/update-product/:pid",
    requireSignIn,
    isAdmin,
    ExpressFormidable(),
    updateProductController
  );

// get product Route
router.get("/get-product", getProductContoller);

// get single product Route
router.get("/get-product/:slug", getSingleProductContoller);

//  get photo
router.get("/product-photo/:pid", productPhotoController);

// delete product
router.delete("/delete-product/:pid", deleteProductController);

// Filter products
router.post('/product-filters', productFiltersController);

// Product Count
router.get('/product-count', productCountController);

// product per page
router.get('/product-list/:page', productListPageController);

//  Search Product 
router.get('/search/:keyword', searchProductController);

// similar product
router.get('/related-product/:pid/:cid', reletedProductController);

// category wise product
router.get('/product-category/:slug', productCategoryController);

export default router;
