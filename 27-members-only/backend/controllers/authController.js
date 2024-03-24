import User from '../models/User.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const createUser = async (req, res) => {
  const { email, password, passwordConfirm, name, lastName } = req.body

  if (!email || !password || !passwordConfirm) {
    return res.status(400).json({ message: 'Missing required fields' })
  }

  if (password !== passwordConfirm) {
    return res.status(400).json({ message: 'Passwords do not match' })
  }

  try {
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    const user = new User({
      name,
      lastName,
      email,
      password: hashedPassword,
    })

    const savedUser = await user.save()
    res
      .status(201)
      .json({ message: 'User created successfully', user: savedUser })
  } catch (err) {
    if (err.name === 'ValidationError') {
      const errorMessage = Object.values(err.errors)[0].message
      return res.status(400).json({ message: errorMessage })
    }
    res.status(500).json({ message: 'Error creating user', err })
  }
}

const loginUser = async (req, res) => {
  const { email, password } = req.body
  if (!email || !password) {
    return res.status(400).json({ message: 'Missing required fields' })
  }
  try {
    const user = await User.findOne({ email: email })
    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' })
    }

    const checkPassword = await bcrypt.compare(password, user.password)
    if (!checkPassword) {
      return res.status(401).json({ message: 'Invalid credentials' })
    }

    const secret = process.env.SECRET
    const token = jwt.sign({ id: user._id }, secret, { expiresIn: '24h' })

    res.status(200).json({ message: 'User logged in successfully', token })
  } catch (error) {
    res.status(500).json({ message: 'Error logging in', error })
  }
}

export { createUser, loginUser }
