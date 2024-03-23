import Product from '../models/Product.js'

const getProducts = async (req, res) => {
  try {
    const products = await Product.find()
    res.json(products)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const getProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id)
    res.json(product)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const createProduct = async (req, res) => {
  try {
    const createdProduct = await Product.create(req.body)

    res.status(201).json(createdProduct)
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' })
  }
}

const updateProduct = async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    )
    res.status(200).json(updatedProduct)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const deleteProduct = async (req, res) => {
  if (!req.params.id) {
    return res.status(400).json({ error: 'Product ID is required' })
  }
  if(!req.body.password || req.body.password === '') {
    return res.status(400).json({ error: 'Password is required' })
  }
  const password = req.body.password
  if (password !== process.env.PASSWORD) {
    return res.status(401).json({ error: 'Unauthorized' })
  } 
  try {
    await Product.findByIdAndDelete(req.params.id)
    res.status(200).json({ message: 'Product deleted successfully' })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

export {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
}
