import expressAsyncHandler from "express-async-handler";

import Post from "../models/Post.js";

export const getPosts = expressAsyncHandler(async (req, res) => {
  const posts = await Post.find();
  res.status(200).json(posts);
});

export const createPost = expressAsyncHandler(async (req, res) => {
  const { text, imageUrl } = req.body;

  if (!text || !imageUrl) {
    res.status(400);
    throw new Error("Please add a post");
  }

  const newPost = await Post.create({
    text: text,
    imageUrl: imageUrl,
  });
  res.status(201).json(newPost);
});
