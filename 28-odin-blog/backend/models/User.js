import mongoose from 'mongoose'

const User = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
    toObject: {
      virtuals: true,
    },
  }
)

User.virtual('fullName').get(function () {
  const fullName = `${this.name} ${this.lastName}`

  const capitalizedFullName = fullName.replace(/\b\w/g, (char) =>
    char.toUpperCase()
  )

  return capitalizedFullName
})

export default mongoose.model('User', User)
