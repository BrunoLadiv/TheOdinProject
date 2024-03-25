import express from 'express'
import { createPost, getUserPosts } from '../controllers/postsController.js'
import checkToken from '../utilities/checkToken.js'

const router = express.Router()

router.route('/').post(checkToken, createPost)
router.route('/myposts').get(checkToken, getUserPosts)

export default router
