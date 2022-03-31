import express from "express";

import {
  createPost,
  getAllPosts,
  getPost,
  updatePost,
  deletePost,
} from "../controller/post-controller.js";

import { createUser, checkUser } from "../controller/user-controller.js";

import { uploadFile, getImage } from "../controller/image-controller.js";

import {
  newComment,
  getComments,
  deleteComment,
} from "../controller/comment-controller.js";
import upload from "../utils/upload.js";

const router = express.Router();

router.post("/create", createPost);

router.get("/posts", getAllPosts);

router.get("/post/:id", getPost);

router.post("/update/:id", updatePost);

router.delete("/delete/:id", deletePost);

router.post("/file/upload", upload.single("file"), uploadFile);

router.get("/file/:filename", getImage);

//router.get("/file/:filename", getImage);

router.post("/signup", createUser);

router.get("/check/:username/:pass", checkUser);

router.post("/comment/new", newComment);

router.get("/comments/:id", getComments);

router.delete("/comment/delete/:id", deleteComment);

export default router;
