import mongoose from 'mongoose'

const User = mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: [true, 'Email already exists, Please try a different email!'],
  },
  password: {
    type: String,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

export default mongoose.model('User', User)
