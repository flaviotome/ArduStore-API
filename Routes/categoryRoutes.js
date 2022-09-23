import express from "express";
import CategoryController from "../Controllers/categoryController.js";

const router = express.Router();

router
  .get("/category", CategoryController.getCategory)
  .get("/category/:id", CategoryController.getCategoryById)
  .post("/category", CategoryController.postCategory)
  .delete("/category/:id", CategoryController.deleteCategory);
export default router;
