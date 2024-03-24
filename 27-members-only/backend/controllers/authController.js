import User from '../models/User.js'

const createUser = (req, res) => {
  const { email, password, passwordConfirm, name, lastName } = req.body

  if (!email || !password || !passwordConfirm) {
    return res.status(400).json({ message: 'Missing required fields' })
  }

  if (password !== passwordConfirm) {
    return res.status(400).json({ message: 'Passwords do not match' })
  }

  const user = new User({
    name,
    lastName,
    email,
    password,
  })

  user
    .save()
    .then((user) => {
      res.status(201).json({ message: 'User created successfully', user })
    })
    .catch((err) => {
      if (err.name === 'ValidationError') {
        const errorMessage = Object.values(err.errors)[0].message
        return res.status(400).json({ message: errorMessage })
      }
      res.status(500).json({ message: 'Error creating user', err })
    })
}

export { createUser }
