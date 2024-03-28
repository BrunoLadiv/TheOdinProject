import Post from '../models/Post.js'

const createPost = async (req, res) => {
  const { id: author } = req.user
  const { title, content } = req.body
  const newPost = new Post({
    title,
    content,
    author,
  })

  try {
    const savedPost = await newPost.save()
    res.status(201).json(savedPost)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const getPosts = async (req, res) => {
  try {
    const posts = await Post.find()
    res.status(200).json(posts)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const getUserPosts = async (req, res) => {
  const { id: author } = req.user
  try {
    const posts = await Post.find({ author })
    res.status(200).json(posts)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}
export { createPost, getUserPosts, getPosts }
