import mongoose from "mongoose";

const PostSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  picture: {
    type: String,
    required: false,
  },
  userName: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: false,
  },
  createdDate: {
    type: Date,
  },
});

const post = mongoose.model("post", PostSchema);

export default post;
