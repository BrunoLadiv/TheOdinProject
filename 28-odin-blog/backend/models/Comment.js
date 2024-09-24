import mongoose from "mongoose";

const Comment = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
      maxlength: 180,
      minlength: 3,
    },
    author: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 20,
    },
    date: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true },
);

export default mongoose.model("Comment", Comment);
