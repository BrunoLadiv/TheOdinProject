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
    res
      .status(201)
      .json({ post: savedPost, message: 'Post created successfully' })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const getPosts = async (req, res) => {
  console.log(req.query)
  try {
    const page = parseInt(req.query.page) || 1
    const limit = parseInt(req.query.limit) || undefined

    // Calculate skip based on page and limit
    const skip = (page - 1) * limit

    // Fetch posts for the current page
    const posts = await Post.find().sort({ date: -1 }).skip(skip).limit(limit)

    // Fetch total count of posts (for pagination)
    const totalCount = await Post.countDocuments()

    // Calculate total pages
    const totalPages = Math.ceil(totalCount / limit)

    // Response with pagination information
    res.status(200).json({ posts, totalPages, currentPage: page })
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

const deletePost = async (req, res) => {
  const { id } = req.params
  try {
    const post = await Post.findByIdAndDelete(id)
    if (!post) {
      return res.status(404).json({ message: 'Post not found' })
    }
    res.status(200).json({ message: 'Post deleted successfully' })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}
export { createPost, getUserPosts, getPosts, deletePost }
