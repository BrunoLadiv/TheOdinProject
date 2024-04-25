import mongoose from 'mongoose'

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 50,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 50,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: [true, 'Email already exists, Please try a different email!'],
      maxlength: 100,
    },
    password: {
      type: String,
      required: true,
      minlength: [
        5,
        'Password must be at least 6 characters long, Please try a different password!',
      ],
      maxlength: [
        100,
        'Password must be at most 100 characters long, Please try a different password!',
      ],
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    isMember: {
      type: Boolean,
      default: false,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
)

userSchema.virtual('fullName').get(function () {
  const fullName = `${this.name} ${this.lastName}`

  const capitalizedFullName = fullName.replace(/\b\w/g, (char) =>
    char.toUpperCase()
  )

  return capitalizedFullName
})

export default mongoose.model('User', userSchema)
