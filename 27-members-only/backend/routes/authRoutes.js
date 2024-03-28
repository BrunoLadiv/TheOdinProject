import express from 'express'
import {
  createUser,
  loginUser,
  becomeMember,
  getUserById,
} from '../controllers/authController.js'
import checkToken from '../utilities/checkToken.js'

const router = express.Router()

router.route('/login').post(loginUser)
router.route('/register').post(createUser)
router.route('/become-member').post(checkToken, becomeMember)
router.route('/user/:id').get(getUserById)

export default router
