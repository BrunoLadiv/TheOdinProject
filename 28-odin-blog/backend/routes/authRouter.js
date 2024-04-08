import express from 'express'
import { createUser } from '../controllers/authController.js'

const router = express.Router()

router.route('/create-user').post(createUser)

export default router
