import express from 'express'
import {
  createUser,
  loginUser,
  becomeMember,
} from '../controllers/authController.js'
import checkToken from '../utilities/checkToken.js'

const router = express.Router()

router.route('/login').post(loginUser)
router.route('/register').post(createUser)
router.route('/become-member').post(checkToken, becomeMember)

export default router
