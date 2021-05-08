import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Cat = new Schema(
  {
    name: { type: String, required: true },
    chonkyness: { type: String, required: true },
    imagelink: { type: String, required: true },
    biography: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.model("cat", Cat);
