import Post from '../models/Post.js'

const createPost = async (req, res) => {
  const { title, content, author } = req.body
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

export { createPost }
