import express from "express";
import {
  getPost,
  createPost,
  getPosts,
  deletePost,
  addCommentToPost,
} from "../controllers/postsController.js";
import checkToken from "../utilities/checkToken.js";

const router = express.Router();

router.route("/:slug/comments").post(addCommentToPost);
router.route("/:slug").get(getPost).delete(checkToken, deletePost);
router.route("/").get(getPosts).post(checkToken, createPost);

export default router;
