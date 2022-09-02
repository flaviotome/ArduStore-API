import express from "express";
import CategoryController from "../Controllers/categoryController.js";

const router = express.Router();

router
  .get("/category", CategoryController.getCategory)
  .post("/category", CategoryController.postCategory);
export default router;
