import Post from '../models/Post.js'

const createPost = async (req, res) => {
  const { id: author } = req.user
  console.log(req.body)
  const { title, content, cover_img, tags , description} = req.body
  const newPost = new Post({
    description,
    tags,
    cover_img,
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

const getPost = async (req, res) => {
  try {
    console.log(req.params.slug)
    const post = await Post.findOne({ slug: req.params.slug });
    res.status(200).json({ post })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const getPosts = async (req, res) => {
  console.log(req.query)
  try {
    const page = parseInt(req.query.page) || 1
    const limit = parseInt(req.query.limit) || undefined
    const tag = req.query.tag || '' // Single tag for filtering

    // Calculate skip based on page and limit
    const skip = (page - 1) * limit

    // Build query for filtering by a single tag
    const query = tag ? { tags: tag } : {}

    // Fetch posts for the current page with filtering by tag
    const posts = await Post.find(query).sort({ date: -1 }).skip(skip).limit(limit)

    // Fetch total count of posts with the same filter
    const totalCount = await Post.countDocuments(query)

    // Calculate total pages
    const totalPages = limit ? Math.ceil(totalCount / limit) : 1

    // Response with pagination and filtering information
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

export { getPost, createPost, getUserPosts, getPosts, deletePost }
