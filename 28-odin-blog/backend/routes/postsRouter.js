import express from "express";
import {
  getPost,
  createPost,
  getPosts,
  deletePost,
} from "../controllers/postsController.js";
import checkToken from "../utilities/checkToken.js";

const router = express.Router();

router.route("/:id").get(getPost).delete(checkToken, deletePost);
router.route("/").get(getPosts).post(checkToken, createPost);

export default router;
