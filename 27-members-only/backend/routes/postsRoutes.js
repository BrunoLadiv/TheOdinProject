import express from 'express'
import { createPost, getUserPosts } from '../controllers/postsController.js'

const router = express.Router()

router.route('/').post(createPost)
router.route('/:author').get(getUserPosts)

export default router
