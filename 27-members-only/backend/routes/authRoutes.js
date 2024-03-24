import express from 'express'
import { createUser , loginUser} from '../controllers/authController.js'

const router = express.Router()

router.route('/login').post(loginUser)
router.route('/register').post(createUser)

export default router
