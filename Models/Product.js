import mongoose from "mongoose";
import ObjectId from "mongoose/lib/types/objectid.js";

const productsSchema = new mongoose.Schema({
  _id : {type: ObjectId},
  productName: { type: String, require: true },
  productPrice: { type: Number, require: true },
  productDescription: { type: String, require: true },
  productType: { type: ObjectId, required: true, unique: true, ref: 'category' },
  productImg: { type: String, require: true },
});

const products = mongoose.model("products", productsSchema);

export default products;
