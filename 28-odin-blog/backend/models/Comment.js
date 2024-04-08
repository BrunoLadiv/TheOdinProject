import mongoose from 'mongoose'

const Comment = mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
  user: {
    type: String,
    required: true,
  },
})


export default mongoose.model('Comment', Comment)
