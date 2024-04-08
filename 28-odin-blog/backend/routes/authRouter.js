import express from 'express'
import { createUser } from '../controllers/authController'

const router = express.Router()

router.route('create-user').post(createUser)

export default router
