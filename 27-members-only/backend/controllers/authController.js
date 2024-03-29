import User from '../models/User.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const createUser = async (req, res) => {
  console.log(req.body)
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
    const token = jwt.sign({ id: savedUser._id }, secret, { expiresIn: '24h' })
    const resUser = {
      fullName: savedUser.fullName,
      email: savedUser.email,
      isMember: savedUser.isMember,
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
    const resUser = {
      fullName: user.fullName,
      email: user.email,
      isMember: user.isMember,
      id: user._id,
    }

    res
      .status(200)
      .json({ message: 'User logged in successfully', user: resUser, token })
  } catch (error) {
    res.status(500).json({ message: 'Error logging in', error })
  }
}

const becomeMember = async (req, res) => {
  const { password } = req.body
  const { id } = req.user
  if (!id) {
    return res.status(401).json({ message: 'Unauthorized' })
  }
  if (!password) {
    return res.status(400).json({ message: 'Password Required' })
  }
  if (password !== process.env.MEMBER_PASSWORD) {
    return res.status(401).json({ message: 'Wrong Password' })
  }
  try {
    const user = await User.findById(id)
    user.isMember = true
    await user.save()
    res.status(200).json({ message: 'You are now a member!' })
  } catch (error) {
    res.status(500).json({ message: 'Error becoming a member' })
  }
}

const getUserById = async (req, res) => {
  const { id } = req.params
  try {
    const user = await User.findById(id)
    if (!user) {
      return res.status(404).json({ message: 'User not found' })
    }
    res.status(200).json({ user })
  } catch (error) {
    res.status(500).json({ message: 'Error getting user' })
  }
}

export { createUser, loginUser, becomeMember, getUserById }
