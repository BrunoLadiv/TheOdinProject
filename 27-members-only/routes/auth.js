import express from 'express'
import { createUser } from '../controllers/authController.js'

const router = express.Router()

router.route('/login').post()
router.route('/register').post(createUser)

export default router
