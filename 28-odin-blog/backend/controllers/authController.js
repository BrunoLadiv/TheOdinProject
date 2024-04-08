import User from '../models/User'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const createUser = async (req, res) => {
  const { email, password, name, lastName } = req.body

  if (!email || !password || !name || !lastName) {
    return res.status(400).json({ message: 'Missing required fields' })
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
    const secret = process.env.SECRET
    const token = jwt.sign({ id: savedUser._id }, secret, { expiresIn: '7d' })
    const resUser = {
      fullName: savedUser.fullName,
      email: savedUser.email,
      id: savedUser._id,
    }
    res
      .status(201)
      .json({ message: 'User created successfully', user: resUser, token })
  } catch (err) {
    if (err.keyPattern.email) {
      return res.status(400).json({ message: 'Email already exists' })
    }
    res.status(500).json({ message: 'Error creating user', err })
  }
}

export { createUser }
