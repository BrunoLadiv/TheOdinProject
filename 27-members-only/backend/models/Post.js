import mongoose from 'mongoose'

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    maxlength: 50,
    minlength: 1,
  },
  content: {
    type: String,
    required: true,
    maxlength: 180,
    minlength: 10,
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
})

export default mongoose.model('Post', postSchema)
