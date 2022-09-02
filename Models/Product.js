import mongoose from "mongoose";

const productsSchema = new mongoose.Schema({
  id: { type: String },
  productName: { type: String, require: true },
  productPrice: { type: Number, require: true },
  productDescription: { type: String, require: true },
  productType: { type: String, required: true },
  productImg: { type: String, require: true },
});

const products = mongoose.model("products", productsSchema);

export default products;
