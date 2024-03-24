import express from 'express'


const router = express.Router()


router.route('/login').post()
router.route('/user').post()


export default router