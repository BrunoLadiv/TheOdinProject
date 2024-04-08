import express from 'express'
import {
  createPost,
  getPosts,
  deletePost,
} from '../controllers/postsController.js'
import checkToken from '../utilities/checkToken.js'

const router = express.Router()

router.route('/').get(getPosts).post(checkToken, createPost)
router.route('/:id').delete(checkToken, deletePost)

export default router
