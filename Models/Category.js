import mongoose from "mongoose";
import ObjectId from "mongoose/lib/types/objectid.js";

const categorySchema = new mongoose.Schema({
  id: { type: ObjectId },
  categoryName: { type: String, require: true },
});

const category = mongoose.model("category", categorySchema);

export default category;
