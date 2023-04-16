import mongoose from "mongoose";

const postSchema = mongoose.Schema(
  {
    text: {
      type: String,
    },
    imageUrl: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Post = mongoose.model("Post", postSchema);

export default Post;
