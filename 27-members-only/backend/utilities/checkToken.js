import jwt from 'jsonwebtoken'
const checkToken = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1]
    const decoded = jwt.verify(token, process.env.SECRET)
    console.log(decoded)
    req.user = decoded
    next()
  } catch (err) {
    console.log(err)
    res.status(401).json({ message: 'Unauthorized' })
  }
}

export default checkToken
